import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.BACKEND_URL,
        // target: 'https://dep-backend-ce.onrender.com/',
        changeOrigin:true,
        secure:false,
        rewrite: (path) => path.replace(/^\/api/,""),
      }
    }
  }
})
