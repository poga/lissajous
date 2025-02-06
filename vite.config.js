import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/lissajous/',  // Changed to match your repository name
  plugins: [react()],
})
