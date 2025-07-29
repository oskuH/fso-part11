import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './testSetup.js'
    }
  };

  if (command === 'serve') {
    config.server = {
      proxy: {
        '/api': 'http://localhost:3003'
      }
    };
  }

  return config;
});