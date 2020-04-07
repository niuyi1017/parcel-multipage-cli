# parcel-multipage-cli
快速构建基于 parcel 的多页应用前端工程化开发环境

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
parcel-multipage-cli（简称pmp-cli）能够帮助您快速初始化一个基于parcel的前端工程化项目。提供模块热重载、css预处理、babel编译等功能服务，让您专注于业务代码的书写而不用关心工程化的问题。