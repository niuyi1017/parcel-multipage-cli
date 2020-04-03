# parcel-multipage-cli
快速构建基于 parcel 的多页应用前端工程化开发环境

### 安装

```shell
  npm install parcel-multipage-cli -g
```
> 本项目依赖parcel，安装前请确认您已安装过parcel。如未安装请执行 ` npm install parcle-bunlder -g ` 来安装parcel。详情参见 (parcel官网)[https://parceljs.org/]  

###  创建项目  
```shell
  pmp-cli create <project-name>
```
### 启动项目
```shell
  cd <project-name>
  npm run dev
```
浏览器打开 http://localhost:1234/pc/index/index.html，

### 打包
```shell
  npm run build
```