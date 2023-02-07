import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
    }
  },
  build: {
    target: "modules",
    lib: {
      entry: resolve(__dirname, "./src/entry.js"),
      name: "d-vue3-lazy-load"
    }
  }
})
