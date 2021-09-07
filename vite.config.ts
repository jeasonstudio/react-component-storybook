import { defineConfig } from 'vite';
import camelCase from 'camelcase';
import * as path from 'path';
import * as fs from 'fs';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
import reactRefresh from '@vitejs/plugin-react-refresh';
import pkg from './package.json';

const getEntry = () => {
  const tsxFile = path.resolve(__dirname, 'src/index.tsx');
  if (fs.existsSync(tsxFile)) return tsxFile;
  const tsFile = path.resolve(__dirname, 'src/index.ts');
  if (fs.existsSync(tsFile)) return tsFile;
  throw new Error('Cannot find entry. (src/index.tsx or src/index.ts)');
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    eslint({ fix: true, throwOnWarning: false }), // not work?
    dts({ tsConfigFilePath: './tsconfig.build.json', insertTypesEntry: true }),
  ],
  esbuild: {
    jsxInject: "import * as React from 'react';",
  },
  build: {
    lib: {
      entry: getEntry(),
      name: camelCase(path.basename(pkg.name)),
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
});
