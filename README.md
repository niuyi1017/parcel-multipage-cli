# parcel-multipage-cli 
快速构建基于 parcel 的多页应用前端工程化开发环境

### 简介
parcel-multipage-cli（简称pmp-cli）能够帮助您快速初始化一个基于parcel的前端工程化项目，让您专注于业务代码的书写而不用关心工程化的问题，从而提升页面的开发效率。
通过pmp-cli构建的项目具有如下功能特性：
* 模块热重载
* npm支持
* 环境区分
* css预处理
* babel编译
* 打包结果后端友好
* 代码拆分 *

### 适用场景
* 静态网站开发
* 后端渲染模板开发
* 活动落地页开发

### 安装

```shell
  npm install parcel-multipage-cli -g
```
> 本项目依赖parcel，安装前请确认您已安装过parcel。如未安装请执行 ` npm install parcle-bunlder -g ` 来安装parcel。详情参见 [parcel官网](https://parceljs.org/)  

###  创建项目  
```shell
  pmp-cli create <project-name>
```
### 启动项目
```shell
  cd <project-name>
  npm run dev
```
浏览器打开 http://localhost:1234/pc/index/index.html

### 打包项目
```shell
  npm run build
```
### 使用说明
#### 模板类型  
pmp-cli提供了两个项目模板：
* parcel-multipage & Basic examples  （full版）
* just parcel-multipage     （simple版）

第一项带有基础的示例，包括全局js、css的引入、全局方法的注册、import()动态引入npm包等;   

第二项仅初始化了项目目录，无示例代码。  

在执行创建项目时可根据您的实际需求来选择项目模板类型。
#### 目录结构（full版）
```
├─build
├─dist
└─src
    ├─api
    ├─assets
    │  ├─images
    │  └─styles
    ├─pages
    |   ├─m
    |   │  └─index
    |   └─pc
    |       └─index
    |
    └─main.js
```
#### main.js
main.js文件将会被每一页的js文件引用，所以可以在main.js文件中进行全局 js、css 的引入，全局方法的注册。
#### 关于代码拆分
parcel默认会将第三方依赖（通过npm安装的包）打包输出到js文件中，导致js文件体积过大。采用 import() 方法动态引入第三方依赖可解决上述问题，详情可参阅parcle官方文档[代码拆分](https://parceljs.org/code_splitting.html)、阮一峰ES6标准入门[import()](https://es6.ruanyifeng.com/#docs/module)部分,以及本项目中的示例代码--通过import()引入axios。  
也可通过cdn的方式引入全局css、js来减小打包体积，可参见项目示例代码main.js中全局引入layui、iconfont。
#### 显式指向文件  
pmp-cli默认构建的是有多个多页应用，有多个入口文件。因此直接打开 http://localhost:1234/  是不行的，  反而你需要显式地指向文件 http://localhost:1234/pages/pc/index/index.html。  详情参阅parcel官方文档[多个文件入口](https://parceljs.org/getting_started.html)部分