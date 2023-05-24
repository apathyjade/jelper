import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { webpackConfigBase } from '../config/index.js';
import {
  resolveByBasePath,
  resolveByRootPath,
} from '../common/index.js';

const getOpts = async () => {
  const cfgPath = path.relative(resolveByRootPath('./lib/common'), path.resolve('./jelper.config.mjs'));
  let jelperCfg: any = {}
  try {
    jelperCfg = await import(cfgPath.replace(/\\/g, '/'));
  } catch (e) {
    console.log('no jelper.config.mjs');
  }
  return merge(
    webpackConfigBase,
    {
      mode: 'none' as 'none',
      entry: resolveByBasePath('./src'),
      plugins: [],
      experiments: {
        outputModule: true
      }
    } as any,
    jelperCfg?.default?.webpackCfg || {}
  );
}
const outputs = [
  {
    filename: 'index.js',
    path: resolveByBasePath('./es'),
    library: {
      type: 'module',
    },
  }, {
    filename: 'index.js',
    path: resolveByBasePath('./lib'),
    library: {
      type: 'commonjs2',
    }
  }
]

export default async function () {
  console.log('start build');
  const opts = await getOpts() as any;

  outputs.forEach((output) => {
    webpack({
      ...opts,
      output: {
        ...opts.output,
        ...output
      }
    }, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(
        stats.toString({
          chunks: false, // 使构建过程更静默无输出
          colors: true,  // 在控制台展示颜色
        })
      );
    }) 
  })
}