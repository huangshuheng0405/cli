import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm'],
  shims: true,
  clean: true,
  dts: true,
  platform: 'node',
  outDir: 'dist'
})
