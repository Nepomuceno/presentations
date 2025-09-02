import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  // Absolute base works with GitHub Pages when using a custom domain at the root
  base: '/',
  plugins: [react(), tailwind()],
})
