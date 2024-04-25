import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from '@farmfe/core'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import postcss from '@farmfe/js-plugin-postcss'

export default defineConfig(({ mode }) => {
  const [env] = loadEnv(mode, process.cwd())
  return {
    vitePlugins: [
      vue(),
      vueJsx(),
      icons({
        autoInstall: true,
        compiler: 'vue3',
        customCollections: {
          custom: FileSystemIconLoader(
            path.join(process.cwd(), 'src/assets/svg'),
          ),
        },
      }),
      autoImport({
        dts: './typings/auto-imports.d.ts',
        imports: [
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
        dirs: ['./src/store/modules/**', './src/hooks/common/**'],
        eslintrc: {
          enabled: true,
        },
      }),
      components({
        dts: './typings/components.d.ts',
        types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
        resolvers: [
          NaiveUiResolver(),
          IconsResolver({
            customCollections: ['custom'],
          }),
        ],
      }),
    ],
    plugins: ['@farmfe/plugin-sass', postcss()],
    server: {
      proxy: {
        [env.VITE_API_URL]: {
          target: env.VITE_PROXY,
          changeOrigin: true,
          rewrite: (path: string) =>
            path.replace(new RegExp(`^${env.VITE_API_URL}`), ''),
        },
      },
    },
    compilation: {
      external: ['uno.css'],
      resolve: {
        alias: {
          '@': path.join(process.cwd(), 'src'),
        },
      },
    },
  }
})
