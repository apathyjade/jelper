/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-17 12:55:08
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-17 12:55:08
 */


import { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { getModulePath } from '../common';
const opts: RollupBabelInputPluginOptions = {
  extensions: ['.js', '.jsx', 'ts', 'tsx', '.es6', '.es', '.mjs'],
  babelHelpers: 'runtime',
  presets: [
    [getModulePath('@babel/preset-typescript')],
    [getModulePath('@babel/preset-env')]
  ],
  plugins: [
    [
      getModulePath('@babel/plugin-transform-runtime')
    ]
  ]
}

export default opts;
