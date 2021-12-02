import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

export default defineConfig(async ({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'],
      }),
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
      proxy: {
        '/api': 'http://localhost:8199/',
      },
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
