import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  manifest: {
    name: "Payscribe",
    short_name: "Payscribe",
    description: "",
    icons: [
      {
        src: "./public/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "./public/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "./public/mstile-150x150.png",
        sizes: "150x150",
        type: "image/png"
      },
      {
        src: "./public/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
    ]
  }
})
