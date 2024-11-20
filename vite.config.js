import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // https://stackoverflow.com/a/77234158/433835
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      strictPort: true,
      proxy: {
        '/api': env.VITE_PROXY,
      },
    }
  }
})
