const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

const isProdEnv = process.env.NODE_ENV === 'production';

const output = {
  dir: isProdEnv ? 'lib' : 'example',
  name: isProdEnv ? 'index' : 'ts-lib'
};

/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: './src/index.ts',
  output: [
    {
      file: `./${output.dir}/${output.name}.js`,
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions
    }),
    replace({
      __DEV__: `process.env.NODE_ENV !== 'production'`
    })
  ],
  external: []
};
