<div align="center">
  <a href="https://github.com/luckyjing/package">
    <img width=110px src="https://camo.githubusercontent.com/df6f023009d1a130cb9f353aca01129c05ae9548/68747470733a2f2f706172746e6572732e6e706d6a732e636f6d2f7765656b6c792f7765656b6c792d6865616465722d626f7865732d726574696e612e706e67">
  </a>

Scaffold out a node module with ES6+, Babel, tape and npm scripts,inspired by [rise](https://github.com/jbucaran/rise) and (dva)[https://github.com/dvajs/dva]

[![Build Status](https://img.shields.io/travis/luckyjing/package.svg?style=flat)](https://travis-ci.org/luckyjing/package)
[![Coverage Status](https://img.shields.io/coveralls/luckyjing/package.svg?style=flat)](https://coveralls.io/r/luckyjing/package)

</div>
<br>

## 安装

```
$ git clone https://github.com/luckyjing/package <your_project_name>

// 安装依赖
$ npm install

// 执行test目录下的所有测试用例，并且呈现测试覆盖率报告
$ npm run build

// 模块ES6转换为ES5
$ npm run build

// [todo] 产生公共资源（如*.min.js）
$ npm run dist

// 发布

```

## 功能

- 支持`Babel`，所有的ES6语法模块转换为ES5模块后进行发布


## License

[MIT](https://tldrlegal.com/license/mit-license)
