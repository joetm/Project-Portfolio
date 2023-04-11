import { defineConfig } from 'vite'


export default defineConfig(({ command, mode }) => {
  return {
    root: './src',
    build: {
      outDir: '../dist',
      minify: false,
      emptyOutDir: true,
    },
  }
})

