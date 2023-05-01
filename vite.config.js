import { defineConfig } from 'vite'


export default defineConfig(({ command, mode }) => {
  return {
    root: './src',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
    plugins: [],
    publicDir: '../public',
    build: {
      outDir: '../dist',
      minify: false,
      emptyOutDir: true,
    },
  }
})

