import buble from 'rollup-plugin-buble'

export default {
  entry: './src/index.js',
  dest: './app/build/bundle.js',
  sourceMap: true,
  format: 'iife',
  moduleName: 'self',
  plugins: [buble()],
}
