import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL = 'currency-converter';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${BASE_URL}/`
})
