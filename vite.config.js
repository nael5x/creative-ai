import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // React and a few animation dependencies read this at runtime. In a
  // browser-only static bundle it must be replaced at build time.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
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
