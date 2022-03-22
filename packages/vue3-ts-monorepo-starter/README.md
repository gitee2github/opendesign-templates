# vue3-ts-mpa-starter

### 介绍
vue3多项目模板, 使用pnpm管理monorepo，并集成Scss + Vue Router + Pinia + Axios

### 软件架构
Vue 3 + TypeScript + Vite + Scss + Vue Router + Pinia + Axios


### 使用说明
#### 如何新增项目？
1. 在packages目录下新增子项目目录
2. 在package.json中增加子项目相关命令配置
```
// package.json
{
  ...
  "scripts": {
    "dev:demo2": "pnpm dev --filter demo2",
    "build:demo2": "pnpm build --filter demo1",
    "build": "pnpm build:demo1 && pnpm build:demo2" // 
  },
  ...
}
```

### 安装教程
1. 使用[pnpm](https://www.pnpm.cn/installation)安装
2. 安装依赖 ```pnpm install```
3. 运行指定项目（demo1） ```pnpm dev:demo1```
4. 访问页面 ```http://localhost:3000/demo1/```


### 风格命名
1. 文件夹名称建议使用kebab-case, 如： hello-world
2. vue文件建议使用PascalCase, 如： HelloWorld.vue

### 目录说明
```
|-- packages // 多项目目录
  |-- shared 公共模块项目
    |-- plugins 插件
      |-- axios axios封装
    |-- styles 公共样式
    |-- svg-icons  svg图标库
    |-- utils 工具库

  |-- demo demo项目

    --- index.html 入口html
    
    |-- src 
        |-- api API接口

        |-- assets 资源目录，如图片、视频等

        |-- components 跨页面公共组件

        |-- pages 项目页面
            |-- course 页面
            |-- course-detail 子页面

        |-- shared 公共工具及文件

        |-- stores 全局状态管理

        --- main.ts 入口文件
        --- router.ts 路由文件
```

### 参与贡献
1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request