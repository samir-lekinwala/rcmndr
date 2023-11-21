import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'
export default defineConfig({
  build: {
    outDir: './dist/assets',
  },
  // When deploying add all content related to registration should be in assests and put in assets??
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,ts,tsx,css,html,ico,png,svg}'],
      },
      //   manifest: {
      //     name: 'rcmndr',
      //     short_name: 'rcmndr',
      //     start_url: '/',
      //     orientation: 'portrait',
      //     display: 'standalone',
      //     background_color: '#FF17CE',
      //     theme_color: '#1B0636',
      //     icons: [
      //       {
      //         src: '/favicon-16x16.png',
      //         sizes: '16x16',
      //         type: 'image/png',
      //       },
      //       {
      //         src: '/favicon-32x32.png',
      //         sizes: '32x32',
      //         type: 'image/png',
      //       },
      //     ],
      //   },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
      '/admin': {
        target: 'http://localhost:3000',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
