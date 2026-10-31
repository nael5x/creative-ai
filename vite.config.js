import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    cssCodeSplit: false,
    lib: {
      entry: 'scripts/components-entry.jsx',
      formats: ['es'],
      fileName: () => 'creative-ai-components.js'
    },
    rollupOptions: {
      output: { assetFileNames: 'creative-ai-components[extname]' }
    }
  }
});
