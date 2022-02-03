import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import windiCss from 'vite-plugin-windicss'

export default defineConfig(async ({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const apiUrl = env.VITE_API_URL
  const proxy = {}
  proxy[apiUrl] = {
    target: env.VITE_PROXY,
    changeOrigin: true,
    rewrite: path => path.replace(new RegExp(`^${apiUrl}`), ''),
  }

  return {
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'],
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: mode === 'development',
      }),
      windiCss()
    ],
    base: env.VITE_BASE_URL, // 设置打包路径
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '/#/': resolve(__dirname, 'types/'),
      },
    },
    server: {
      host: true,
      port: 8080,
      proxy,
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: "import { h } from 'vue';",
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
  }
})
