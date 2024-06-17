(function (graph) {
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
        require('./src/index.js')
    })({"./src/index.js":{"deps":{"./add.js":"./src/add.js","./reduce.js":"./src/reduce.js"},"code":"\"use strict\";\n\nvar _add = require(\"./add.js\");\n\nvar _reduce = _interopRequireDefault(require(\"./reduce.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log(\"reduce(10,5)\", (0, _reduce[\"default\"])(10, 5)), console.log((0, _add.add)(4, 5)), console.log(\"yangonaaaaaaaaaaa\");"},"./src/add.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.add = add;\nexports.sayHi = sayHi;\n\nfunction add(n, o) {\n  return n + o;\n}\n\nfunction sayHi() {\n  console.log(\"hi,webpack!\");\n}"},"./src/reduce.js":{"deps":{"./add.js":"./src/add.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = reduce;\n\nvar _add = require(\"./add.js\");\n\nfunction reduce(d, r) {\n  return d - r;\n}"}})