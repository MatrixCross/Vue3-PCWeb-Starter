# Vue 3 Starter

[![Author](https://img.shields.io/badge/Author-Wyatex-green)](https://github.com/Wyatex/)
[![Issues](https://img.shields.io/github/issues/Wyatex/Vue3-starter)](https://github.com/Wyatex/Vue3-starter/issues)
[![License](https://img.shields.io/badge/License-MIT-yellowgreen)](https://github.com/Wyatex/Vue3-starter/blob/master/LICENSE)

> 一套集成了 Vite 2.x + Vue 3.x + TypeScript + Vue Router + Pinia + Axios + ESlint 等套件的快速开发模板。

[在线预览](https://wyatex.gitee.io/vue3-starter/)

## 快速开始

### 下载项目

使用 git 进行克隆

```sh
git clone https://github.com/Wyatex/Vue3-starter.git
```

### 安装依赖

```sh
yarn
```

### 启动 dev 服务器和构建

启动 dev 服务器

```sh
yarn dev
```

构建，默认打包到'./dist'

```sh
yarn build
```

## 技术栈

- 编程语言：[Typescript](https://www.typescriptlang.org/zh/) + [Javascript](https://www.javascript.com/)
- 构建工具：[Vite2](https://vitejs.cn/)
- 前端框架：[Vue3](https://v3.cn.vuejs.org/)
- 路由管理：[Vue-Router4](https://next.router.vuejs.org/zh/index.html)
- 状态管理：[pinia](https://pinia.esm.dev/)
- CSS 预处理：[Less](https://less.bootcss.com/)
- CSS 引擎：[UnoCSS](https://github.com/unocss/unocss)
- HTTP 工具：[Axios](https://axios-http.com/)
- JSX 处理：[@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)
- 代码规范：[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- 单元测试：[vitest](https://vitest.dev/) + [vue-test-utils](https://vue-test-utils.vuejs.org/zh/)
- 组件库：[Naive-UI](https://www.naiveui.com/)
- Icon 库：[@iconify/json](https://www.npmjs.com/package/@iconify/json) + [@iconify/vue](https://www.npmjs.com/package/@iconify/vue) + [unplugin-icons](https://github.com/antfu/unplugin-icons)

> icon图标查找：[icones](https://icones.js.org/)

## 项目配置

目前的主要配置项：

- src/settings/index.ts
- .env(.development / .production)
- vite.config.js

## UI 组件库

本分支（master）使用的是 NaiveUI，后续会在其他分支使用其他的组件库，比如 AntDV 和 ElementUI，敬请期待！
