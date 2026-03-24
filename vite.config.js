import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allows importing images as: import img from '@assets/5.jpg'
      '@assets': path.resolve(__dirname, './assets'),
    },
  },
})
