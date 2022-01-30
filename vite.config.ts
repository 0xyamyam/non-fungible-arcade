import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.replace(`${process.env.GITHUB_REPOSITORY_OWNER}`, '') + '/' : './',
  plugins: [vue()]
})
