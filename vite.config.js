import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configure Vite to use a custom server setup
    middlewareMode: 'express',
    setupMiddleware: (app) => {
      // Example middleware to set Permissions-Policy header
      app.use((req, res, next) => {
        res.setHeader('Permissions-Policy', 'geolocation=(self "https://jevguio.github.io/")');
        next();
      });
    },
  },
})
