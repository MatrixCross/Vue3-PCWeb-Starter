import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe } from 'vite-plugin-mock'
import { createHtmlPlugin } from 'vite-plugin-html'
import components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import icons from 'unplugin-icons/vite' // iconify图标
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig(async ({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const apiUrl = env.VITE_API_URL
  const proxy: any = {}
  proxy[apiUrl] = {
    target: env.VITE_PROXY,
    changeOrigin: true,
    rewrite: (path: string) => path.replace(new RegExp(`^${apiUrl}`), ''),
  }

  return {
    plugins: [
      vue(),
      vueJsx(),
      unocss(),
      icons({
        compiler: 'vue3',
        customCollections: {
          custom: FileSystemIconLoader(
            fileURLToPath(new URL('./src/assets/svg', import.meta.url))
          ),
        },
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        dts: true,
      }),
      components({
        types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
        resolvers: [
          NaiveUiResolver(),
          IconsResolver({
            customCollections: ['custom'],
          }),
        ],
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: mode === 'development',
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            appTitle: env.VITE_APP_TITLE,
          },
        },
      }),
    ],
    base: env.VITE_BASE_URL, // 设置打包路径
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
      port: 8080,
      proxy,
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
    build: {
      brotliSize: false,
    },
    test: {
      transformMode: {
        web: [/\.[jt]sx$/],
      },
    },
  }
})
