
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbw3fUbIMdQ9MSTWOg1iYDdz-iGcaU3vFwyLOg2ZRktjT4kVz8Drh4AANp0l4uPOmTUEvw/exec',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
