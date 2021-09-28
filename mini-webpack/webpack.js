const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");
const uglifyJS = require("uglify-js");

function getModuleInfo(file) {
  const body = fs.readFileSync(file, "utf-8");

  console.log("body", body);
  //在babel编译前tree-shaking  
  //后果:引入的包很多都是bable编译后的，就没有对引入的包tree-shaking 而实际项目中引入的包占大头
  //解决:生成依赖前，对code进行标记哪些是used，哪些没有ues,再考虑删除
  const res = uglifyJS.minify(body, {
    compress: {
      dead_code: true,
    },
  });

  console.log("res", res);

  const ast = parser.parse(res.code, {
    sourceType: "module",
  });

  const deps = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file);
      const abspath = "./" + path.join(dirname, node.source.value);
      deps[node.source.value] = abspath.replace("\\", "/");
    },
  });

  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"],
  });

  const moduleInfo = { file, deps, code };
  return moduleInfo;
}

/**
 * 模块解析
 * @param {*} file
 * @returns
 */
function parseModules(file) {
  const entry = getModuleInfo(file);
  const temp = [entry];
  const depsGraph = {};

  getDeps(temp, entry);

  temp.forEach((moduleInfo) => {
    depsGraph[moduleInfo.file] = {
      deps: moduleInfo.deps,
      code: moduleInfo.code,
    };
  });
  return depsGraph;
}

/**
 * 获取依赖
 * @param {*} temp
 * @param {*} param1
 */
function getDeps(temp, { deps }) {
  Object.keys(deps).forEach((key) => {
    const child = getModuleInfo(deps[key]);
    temp.push(child);
    getDeps(temp, child);
  });
}

function bundle(file) {
  const depsGraph = JSON.stringify(parseModules(file));
  return `(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }
            var exports = {};
            (function (require,exports,code) {
                eval(code)
            })(absRequire,exports,graph[file].code)
            return exports
        }
        require('${file}')
    })(${depsGraph})`;
}
const content = bundle("./src/index.js");

!fs.existsSync("./dist") && fs.mkdirSync("./dist");
fs.writeFileSync("./dist/bundle.js", content);
