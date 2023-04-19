import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig(configEnv => {
  const env = loadEnv(configEnv.mode, './')
  return {
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
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      unocss(),
      icons({
        autoInstall: true,
        compiler: 'vue3',
        customCollections: {
          custom: FileSystemIconLoader(
            fileURLToPath(new URL('./src/assets/svg', import.meta.url))
          ),
        },
      }),
      autoImport({
        dts: './typings/auto-imports.d.ts',
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
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
  }
})
