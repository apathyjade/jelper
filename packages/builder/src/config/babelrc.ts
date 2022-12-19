/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-17 12:55:08
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-17 12:55:08
 */

import { getModulePath } from '../common/index.js';
import tsconfig from './tsconfig.js';

const opts = {
  presets: [
    [getModulePath('@babel/preset-env'), {
      'targets': {
        'chrome': '58',
        'ie': '11',
      }
    }],
    [getModulePath('@babel/preset-react')],
    [getModulePath('@babel/preset-typescript'), tsconfig],
  ],
  plugins: [
    [
      getModulePath('@babel/plugin-transform-runtime')
    ]
  ]
}

export default opts;
