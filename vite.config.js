import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
      '/admin': {
        target: 'http://localhost:3000',
      }
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
