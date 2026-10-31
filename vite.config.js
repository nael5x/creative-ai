import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '.',
    emptyOutDir: false,
    minify: 'esbuild',
    cssCodeSplit: false,
    lib: {
      entry: 'scripts/components-entry.jsx',
      formats: ['es'],
      fileName: () => 'scripts/creative-ai-components.js'
    },
    rollupOptions: {
      output: {
        assetFileNames: 'creative-ai-components[extname]'
      }
    }
  }
});
