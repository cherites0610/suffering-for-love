import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      // 將 API 請求代理到這裡
      '/api': {
        target: 'https://data.taipei',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'https://data.taipei'),  // 將 /api 開頭的路徑替換為空
      },
    },
  }
})
