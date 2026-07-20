import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path, { resolve } from 'path'
import { copyFileSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-new-app/',
  build: {
    outDir: 'docs', // вместо dist
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'copy-nojekyll',
      closeBundle() {
        // Копируем .nojekyll в папку docs после сборки
        copyFileSync(
          resolve(__dirname, '.nojekyll'),
          resolve(__dirname, 'docs', '.nojekyll')
        );
      }
    }
  ],
})
