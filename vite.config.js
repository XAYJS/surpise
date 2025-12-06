import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  // 🟢 CORRECT LOCATION: This tells Vite where your assets live
  base: "/surpise/", 
  plugins: [
    tailwindcss(), 
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      // You can remove the 'base' property from here since it's now global
    }),
    react()
  ],
})