import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
import topLevelAwait from 'vite-plugin-top-level-await'
export default defineConfig({
  plugins: [
    vue(),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: i => `__tla_${i}`
    })
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/style/common.scss" as *;` // 路径根据配置改变，没有别名就用相对路径和绝对路径
      }
    }
  },
})
