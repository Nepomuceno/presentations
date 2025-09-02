import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  // Use relative paths so it works on GitHub Pages under a subpath and on custom domains
  base: '',
  plugins: [react(), tailwind()],
})
