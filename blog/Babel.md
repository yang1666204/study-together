# Babel学习-入门篇



## 为什么需要Babel

项目中我们使用 ES6+ 的各种新语法、新特性：比如箭头函数，async await，但是用户实际使用的浏览器版本可能并不支持这些语法。

![image-20240903224817734](/Users/liyang/Library/Application Support/typora-user-images/image-20240903224817734.png)

 当用户使用的浏览器版本小于图中对应的版本就没办法正常运行我们的代码，所以我们需要一个工具能够让我们在开发环境中使用最新的语法并且部署到生产环境中时能够把代码编译成低版本浏览器也能识别的语法。Babel 就是这样一个工具，并且 Babel 还能做很多事，它是一个工具链，里面包含了多个软件包，它提供了一种能让我们对源码进行静态分析（指在不需要执行代码的前提下对代码进行分析以及相应处理的一个过程，主要应用于语法检查、编译、代码高亮等）或者做一些特定转换的能力。京东的小程序框架 taro，用 react 的语法写小程序，最后还能运用到多个平台，微信小程序抖音小程序等。本质上就是基于 Babel 的 api 实现的，分析源码->转换到对应的语法。

## plugin、preset是什么？

Plugin 通常是单个转换功能的实现，从[官方的文档](https://babeljs.io/docs/plugins)可以了解到插件可以大致分为两种：Transform Plugins 和 Syntax Plugins，转换插件参与进行代码的转译工作；语法插件是在解析阶段辅助解析器工作。比如 **`@babel/plugin-proposal-optional-chaining`**是一个语法插件，支持我们使用可选链操作符（?.），**` @babel/plugin-transform-arrow-functions `** 是一个转换插件，可以把代码中的箭头函数转换成 ES5 的传统函数表达式。

Babel 预设（preset）可以被看作是一组 Babel 插件和/或 options 配置的共享模块，我理解 preset 其实就是插件的集合，用来实现某一个功能，比如 preset-react 用来支持 react，这个 preset 下包含了许多的插件。

## 使用Babel

现在项目中基本上接触不到 Babel，因为上层框架像 umi、next，它们已经封装得极其完善了。不过我们可以创建一个 demo 来感受下如何使用 Babel。

```shell
npm init -y
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

创建配置文件 babel.config.json，并写入：

```json
{
  "presets":["@babel/preset-env"]
}
```

@babel/preset-env 这个预设能力非常强大，它包含了所有稳定的转码插件，还可以根据我们设定的目标环境进行针对性转码。向上述这样的写法，没有设置任何参数，Babel 会把所有 ES6 的语法转换成 ES5 版本。

创建测试文件 test.js，并写入：

```js
const func = (a, b) => a + b;
let promise = new Promise((resolve) => {
  resolve(1);
});
```

运行 ./node_modules/.bin/babel test.js -o dist.js 或者 npx babel test.js -o dist.js （npx 是新版Node里附带的命令，它运行的时候默认会找到 node_modules/.bin/下的路径执行）,可以看到 dist.js 中生成了编译后的代码：

```js
"use strict";

var func = function func(a, b) {
  return a + b;
};
var promise = new Promise(function (resolve) {
  resolve(1);
});
```

这里 promise 为什么没有改变？因为 Babel 默认只转换新的 JavaScript 语法，而不转换新的 API。官网提供了 @babel/polyfill 这个库来模拟完整的 ES6 环境，这个库的作用就是 polyfill，为当前环境提供一个垫片。所谓垫片，是指垫平不同浏览器之间差异的东西。polyfill 意味着你可以使用诸如 `Promise` 和 `WeakMap` 之类的新的内置组件、 `Array.from` 或 `Object.assign` 之类的静态方法、 `Array.prototype.includes` 之类的实例方法以及生成器函数（generator functions）（前提是你使用了 regenerator 插件）。为了添加这些功能，polyfill 将添加到全局范围（global scope）和类似 `String` 这样的原生原型（native prototypes）中。

但是很多时候其实用不到这么多API，可以给 env preset 添加 "useBuiltIns" 参数，值设置为 "usage"时，会自动按需加载。

```json
// babel.config.json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage"
            }
        ]
    ]
}
```

在运行 npx babel test.js -o dist.js 可以看到它帮我们自动引入了 ES6 的 Promise

```js
"use strict";

require("core-js/modules/es6.object.to-string.js");
require("core-js/modules/es6.promise.js");
var func = function func(a, b) {
  return a + b;
};
var promise = new Promise(function (resolve) {
  resolve(1);
});

```

⚠️ 从 Babel 7.4.0 版本开始，这个软件包（@babel/polyfill）官方已经不建议使用了，建议直接包含 `core-js/stable` （用于模拟 ECMAScript 的功能）:

```js
import "core-js/stable";
```

## 编写并使用插件

编写插件之前得先知道插件是如何工作的，Babel 的转译过程主要分为三步：解析、转换、生成。而插件主要是作用于第二步 transform，在这一步中对 AST 进行添加、更新及移除等操作。

![babel_work](/Users/liyang/Pictures/babel_work.webp)

插件的设计采用[访问者模式](https://github.com/ascoders/weekly/blob/master/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/189.%E7%B2%BE%E8%AF%BB%E3%80%8A%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%20-%20Visitor%20%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F%E3%80%8B.md)，由一个访问者（Visitor）来进行统一的遍历操作，提供节点的操作方法，响应式维护节点之间的关系；而插件（设计模式中称为“具体访问者”）只需要定义自己感兴趣的节点类型，当访问者访问到对应节点时，就调用插件的访问（visit）方法。这样的设计避免了多个插件自己去遍历AST，各自维护自己的状态，使整个系统变得难以理解和调试。

我们以反转 Identifer（即标识符：变量名、属性名、参数名等各种声明和引用的名字等）的插件为例子：

```js
// example-babel-plugin.js
module.exports = function ({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name;
        path.node.name = [...name].reverse().join("");
      },
    },
  };
};

// main.js
const path = require("path");
const { transformFromAstSync } = require("@babel/core");
const exampleBablePlugin = require("./example-babel-plugin");
const parser = require("@babel/parser");
const fs = require("fs");

const sourceCode = fs.readFileSync(path.join(__dirname, "./test.js"), {
  encoding: "utf-8",
});
const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous",
});

const { code } = transformFromAstSync(ast, sourceCode, {
  plugins: [exampleBablePlugin],
});
console.log("code:", code);

//test.js
let yangon;

const github = "";

function say(name) {
  console.log(name);
}
```

通过 [AstExplorer](https://astexplorer.net/) 查看我们的抽象语法树，访问者会采用深度优先策略遍历整棵抽象语法树，当遍历到对应的节点（如例子中的Identifier）会调用对应的函数，函数的参数 path包含了节点的信息以及节点和节点所在的位置，并暴露了一些操作节点的方法，path对象具体如下：

```text
── 属性      
  - node   当前节点
  - parent  父节点
  - parentPath 父path
  - scope   作用域
  - context  上下文
  - ...
── 方法
  - get   当前节点
  - findParent  向父节点搜寻节点
  - getSibling 获取兄弟节点
  - replaceWith  用AST节点替换该节点
  - replaceWithMultiple 用多个AST节点替换该节点
  - insertBefore  在节点前插入节点
  - insertAfter 在节点后插入节点
  - remove   删除节点
  - ...
```

最后运行 node main.js 可以看到终端打印：

![image-20240906113625210](/Users/liyang/Library/Application Support/typora-user-images/image-20240906113625210.png)

符合预期，所以标识符都被反转了。

## 小结

本文**从为什么需要 Babel** 到**如何使用 Babel**，再到**如何编写一个 Babel 插件**作为入门篇的主要内容，其中还有很多内容和细节没有讲述，比如遍历 AST 的 enter 和 exit，scope等。不过作为入门篇，最重要的是可以基于本文的描述能够对 Babel 有一个整体的认识，并上手使用 Babel，那就足够了。