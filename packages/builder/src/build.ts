import { rollup, OutputOptions } from 'rollup';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';


import { babelrc, tsconfig } from './config/index.js'
import { basePath } from './common/index.js';

const opts = {
  input: path.resolve(basePath, './src/index.ts'),
  
  plugins: [
    //@ts-ignore
    typescript(tsconfig),
    resolve(),
    commonjs(),
    babel(babelrc)
  ],

  external: [
    /^lodash\/.*/,
    /^@babel\/.*/
  ]
}

export default async function build() {

  const baseOutCfg: OutputOptions = {
    exports: "auto",
    sourcemap: true,
    globals: {
      window: 'window'
    }
  }
  const bundle = await rollup(opts);
  ([
    {
      file: "lib/index.js",
      format: "cjs",
    },
    {
      file: "es/index.js",
      format: "esm",
    },
  ] as OutputOptions[]).forEach((opt) =>{
    bundle.write({ ...baseOutCfg, ...opt })
  })
}