import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    middlewareMode: false
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        // Ensure service worker files are not hashed
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && (assetInfo.name.includes('OneSignal') || assetInfo.name.endsWith('.js'))) {
            return '[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})

