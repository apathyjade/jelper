/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-17 12:55:08
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-17 12:55:08
 */

// @ts-ignore
import requireHelper from '../utils/require-helper.js';
import tsconfig from './tsconfig.js';

const getOpts = async () => {
  const [
    presetEnvPath,
    presetReactPath,
    presetTypescriptPath,
    pluginTransformRuntimePath,
  ] = await Promise.all([
    requireHelper.resolve('@babel/preset-env'),
    requireHelper.resolve('@babel/preset-react'),
    requireHelper.resolve('@babel/preset-typescript'),
    requireHelper.resolve('@babel/plugin-transform-runtime'),
  ]);
  return {
    presets: [
      [presetEnvPath, {
        'targets': {
          'chrome': '58',
          'ie': '11',
        }
      }],
      [presetReactPath, { runtime: 'automatic' }],
      [presetTypescriptPath, tsconfig],
    ],
    plugins: [
      [pluginTransformRuntimePath]
    ]
  };
};

export default getOpts;
