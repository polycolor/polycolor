const typescript = require('@rollup/plugin-typescript')
// const terser = require('@rollup/plugin-terser')
// const commonjs = require('@rollup/plugin-commonjs')
// const resolve = require('@rollup/plugin-node-resolve')
// const size = require('rollup-plugin-filesize')

const glob = require('glob')
// const dedent = require('string-dedent')

// -----------------------------------------------------------------------------

module.exports = {
  input: glob.sync(
    [
      'src/**/*.ts'
    ],
    {
      ignore:
      [
        'src/**/*.test.ts'
      ]
    }),

  output: {
    format: 'cjs',
    sourcemap: true,
    preserveModules: true,
    dir: 'dist'
  },

  plugins: [
    typescript()
  ]
}
