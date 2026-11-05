import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
export default defineConfig({
  base: './',
  plugins: [
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "./src/styles/variables.scss"',
          },
        },
      },
    }),
  ],
})
