/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-17 12:55:08
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-17 12:55:08
 */

import requireHelper from '../../utils/require-helper.cjs';
import tsconfig from './tsconfig.js';

const opts = {
  presets: [
    [requireHelper.resolve('@babel/preset-env'), {
      'targets': {
        'chrome': '58',
        'ie': '11',
      }
    }],
    [requireHelper.resolve('@babel/preset-react')],
    [requireHelper.resolve('@babel/preset-typescript'), tsconfig],
  ],
  plugins: [
    [
      requireHelper.resolve('@babel/plugin-transform-runtime')
    ]
  ]
}

export default opts;
