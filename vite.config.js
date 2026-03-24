import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias for components folder
      '@components': path.resolve(__dirname, 'src/components'),
      // Alias for pages folder
      '@pages': path.resolve(__dirname, 'src/pages'),
      // Alias for assets folder (images, styles, etc.)
      '@assets': path.resolve(__dirname, 'src/assets'),
      // Alias for common utilities or helpers
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
