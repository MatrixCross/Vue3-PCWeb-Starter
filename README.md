# Vue 3 Starter

[![Author](https://img.shields.io/badge/Author-Wyatex-green)](https://github.com/Wyatex/)
[![Issues](https://img.shields.io/github/issues/Wyatex/Vue3-starter)](https://github.com/Wyatex/Vue3-starter/issues)
[![License](https://img.shields.io/badge/License-MIT-yellowgreen)](https://github.com/Wyatex/Vue3-starter/blob/master/LICENSE)

> 一套集成了 Vite 3.x + Vue 3.x + TypeScript + Vue Router + Pinia + Axios + ESlint 等套件的快速开发模板。

[在线预览](https://vue3-pc-web-starter.wyatex.online/)

## 快速开始

### 使用cli创建项目

```sh
pnpm create matrix-starter
```

选择 vue3 - PCWeb-NaiveUI

### 安装依赖

```sh
pnpm i
```

### 启动 dev 服务器和构建

启动 dev 服务器

```sh
pnpm dev
```

构建，默认打包到'./dist'

```sh
pnpm build
```

## 技术栈

- 编程语言：[Typescript](https://www.typescriptlang.org/zh/) + [Javascript](https://www.javascript.com/)
- 构建工具：[Vite4](https://vitejs.cn/)
- 前端框架：[Vue3](https://v3.cn.vuejs.org/)
- 路由管理：[Vue-Router4](https://next.router.vuejs.org/zh/index.html)
- 状态管理：[pinia](https://pinia.esm.dev/)
- CSS 预处理：[Sass](https://sass-lang.com/)
- CSS 引擎：[UnoCSS](https://github.com/unocss/unocss)
- HTTP 工具：[Axios](https://axios-http.com/) + [Alova](https://alova.js.org/zh-CN/)
- JSX 处理：[@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)
- 代码规范：[ESLint](https://eslint.org/)
- 代码格式化：[Prettier](https://prettier.io/)
- 组件库：[Naive-UI](https://www.naiveui.com/)
- Icon 库：[@iconify/json](https://www.npmjs.com/package/@iconify/json) + [@iconify/vue](https://www.npmjs.com/package/@iconify/vue) + [unplugin-icons](https://github.com/antfu/unplugin-icons) + [unocss-icon](https://unocss.dev/presets/icons)

> icon 图标查找：[icones](https://icones.js.org/)

## 项目配置

目前的主要配置项：

- src/settings/index.ts
- .env(.development / .production)
- vite.config.ts

## 图标使用

如果是静态的 icon，可以使用 unplugin-icons 或者 unocss

```html
<!-- unplugin-icons写法 -->
<i-ph-anchor-simple-thin />
<!-- unocss写法 -->
<div class="i-ph-anchor-simple-thin" />
<button class="i-carbon-sun dark:i-carbon-moon" />
```

如果是在 js/ts 引入 icon：

```js
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'
// 可以给jsx / tsx用，项目已经安装jsx插件可以之间使用

const IconComponent = () => (
  <div>
    <IconAccessibility />
    <IconAccountBox style={{ fontSize: '2em', color: 'red' }} />
  </div>
)
```

动态 icon，可以根据一个字符串名字，运行时获取 icon 数据：

```
<template>
  <Icon :icon="iconName" />
</template>
<script setup>
const iconName = ref('')
// 省略.......
iconName.value = getIconName()
</script>
```

上面的组件都可以用 unocss 快速设置样式：`class="w-10px h-10px text-red"`，icon 的宽高 10px，主色为红色

## 打包

vite3 之后，生产和开发打包都统一使用 esbuild，无需安装 terser 进行压缩，速度更快，如果生产代码需要去除 console、debugger 等代码，直接配置 esbuild 即可。

## UI 组件库

本分支（master）使用的是 NaiveUI，后续会在其他分支使用其他的组件库，比如 ArcoDesign 和 Tdesign，敬请期待！
