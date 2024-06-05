import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { exec } from 'child_process';
import { webpackConfigBase } from '../config/index.js';
import { resolveByBasePath, getJelperCfg } from '../common/index.js';
import requireHelper from '../../utils/require-helper.cjs';

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
];

const buildTypes = async () => {
  const tscCommand = `${requireHelper.resolve('typescript')}/bin/tsc  --emitDeclarationOnly`;
  return new Promise((resolve) => {
    exec(tscCommand, (error) => {
      if (error) {
        console.error(`执行tsc出错: ${error}`);
        return;
      }
      console.log('.d.ts文件 编译完成');
      resolve(null);
    });
  })
}

export default async function () {
  console.log('start build');
  await buildTypes();
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
    });
  });
}
