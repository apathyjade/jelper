/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-07-06 17:11:58
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-07-06 17:11:58
 */

import { createRslib } from '@rslib/core';

const rslib = await createRslib({
  cwd: process.cwd(),
  config: {
    lib: [
      { format: 'esm', syntax: 'es2015', bundle: true, output: { distPath: 'es/' } },
      { format: 'cjs', syntax: 'es2015', bundle: true, output: { distPath: 'lib/' } },
    ],
  },
  loadEnv: true,
});
await rslib.build();