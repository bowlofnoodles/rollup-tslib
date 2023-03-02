import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      'ts-lib': path.resolve(__dirname, './ts-lib')
    }
  }
});
