
import ora from 'ora';
import chalk from 'chalk';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { webpackConfigBase } from '../config/index.js';
import { resolveByBasePath, getJelperCfg } from '../common/index.js';

import type { BuildOpts } from '../types.js';

const getOpts = async () => {
  const jelperCfg: any = await getJelperCfg();

  console.log(JSON.stringify(await webpackConfigBase()));

  return merge(
    await webpackConfigBase(),
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

export default async function (buildOpts: BuildOpts) {
  const esSpinner = ora('UMD Module Creating...').start();
  const opts = await getOpts() as any;
  return new Promise((resolve, reject) => {
    webpack({
      ...opts,
      output: {
        ...opts.output,
        filename: 'index.js',
        path: resolveByBasePath('./dist'),
        library: {
          type: 'umd2',
        },
      }
    }, (err, stats) => {
      if (err) {
        esSpinner.fail(chalk.red('UMD Module Create Fail'));
        if (buildOpts.debug) {
          throw err;
        }
        reject(err);
        return;
      }
      esSpinner.succeed('UMD Module Create Success');
      if (buildOpts.debug) {
        console.log(
          stats?.toString({
            chunks: false, // 使构建过程更静默无输出
            colors: true,  // 在控制台展示颜色
          })
        );
      }
      resolve(null);
    });
  });
}
