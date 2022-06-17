import { rollup, OutputOptions } from 'rollup';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

import { babelrc } from './config'
import { basePath } from './common';

const opts = {
  input: path.resolve(basePath, './src/index.ts'),
  
  plugins: [
    resolve(),
    commonjs(),
    babel(babelrc)
  ],

  external: [
    /^lodash\/.*/,
    /^@babel\/.*/
  ]
}

console.log(opts);

async function build() {
  const bundle = await rollup(opts);
  ([
    {
      file: "lib/index.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "es/index.js",
      format: "esm",
      exports: "auto",
    },
  ] as OutputOptions[]).forEach((opt) =>{
    bundle.write(opt)
  })
}
build();