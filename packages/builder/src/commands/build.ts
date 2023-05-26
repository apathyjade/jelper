import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { webpackConfigBase } from '../config/index.js';
import { resolveByBasePath, getJelperCfg } from '../common/index.js';

const getOpts = async () => {
  const jelperCfg: any = await getJelperCfg();
  return merge(
    webpackConfigBase,
    {
      mode: 'none' as 'none',
      entry: resolveByBasePath('./src'),
      plugins: [],
      experiments: {
        outputModule: true
      },
      externals: {
        react: {
          amd: 'react',
          commonjs: 'react',
          module: 'react',
          umd: 'react',
          root: 'react'
        },
        'react-dom': {
          amd: 'react-dom',
          commonjs: 'react-dom',
          module: 'react-dom',
          umd: 'react-dom',
          root: 'react-dom'
        },
        classnames: {
          amd: 'classnames',
          commonjs: 'classnames',
          module: 'classnames',
          umd: 'classnames',
          root: 'classnames'
        },
        'styled-components': {
          amd: 'styled-components',
          commonjs: 'styled-components',
          module: 'styled-components',
          umd: 'styled-components',
          root: 'styled-components'
        }
      }
    } as any,
    jelperCfg?.webpackCfg || {}
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