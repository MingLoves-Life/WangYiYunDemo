# 应用技术栈

前端：remax + typeScript  

后端：网易云开放 Api [文档链接](https://binaryify.github.io/NeteaseCloudMusicApi)

## 目录结构

> ├── package.json 

> ├── dist // 打包后的文件 

> ├── public // 静态资源(没用上) 

> └── src // 组件 

> &emsp;&emsp;&emsp;&emsp; ├── common // 公共的资源或者方法 

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ├── request // 请求数据的方法 

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; └── icon.ts // 项目中的使用的 icon 

> &emsp;&emsp;&emsp;&emsp; ├── component // 公共组件 

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ├── input // 搜索框 

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ├── nav-bar // 上方胶囊导航栏 

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; └── rank // 排行榜 

> ├── pages // 具体页面 

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;├── hotList // 排行榜页面  

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;├── index // 主页面

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;├── search // 搜索页面

> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;└── songs // 播放页面.

> ├── app.config.js // 应用配置 

> └── app.js // remax 默认入口文件 


## 基本功能
榜单、搜索、歌曲播放（参照真实网易云小程序）
## 使用方法
安装依赖

```bash
npm install
```

调试项目

```bash
# 执行调试命令
$ npm run dev
or
yarn dev
```

使用小程序开发者工具打开项目下的 `dist` 目录

## 构建

```bash
# 执行构建命令
$ npm run build
or
$ yarn build
```

使用小程序开发者工具打开项目下的 `dist` 目录，上传代码即可。
