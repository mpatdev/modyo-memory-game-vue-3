import { defineConfig } from "vitest/config"
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";


export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: "happy-dom",
        coverage: {
          enabled: true
        }
    },
    resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          '@test': fileURLToPath(new URL('./test', import.meta.url)),
        }
      },
})