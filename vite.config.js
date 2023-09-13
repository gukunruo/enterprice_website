import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// src别名的配置
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    // src别名的配置
    alias: {
      '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
    },
  },
})
