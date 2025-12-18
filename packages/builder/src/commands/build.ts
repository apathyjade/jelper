
import ora from 'ora';
import chalk from 'chalk';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { webpackConfigBase } from '../config/index.js';
import { resolveByBasePath, getJelperCfg } from '../common/index.js';

import type { BuildOpts } from '../types.js';

const getOpts = async () => {
  const jelperCfg: any = await getJelperCfg();

  return merge(
    await webpackConfigBase(),
    {
      name: 'client',
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
          commonjs2: 'react',
          module: 'react',
          umd: 'react',
          root: 'react'
        },
        'react-dom': {
          amd: 'react-dom',
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          module: 'react-dom',
          umd: 'react-dom',
          root: 'react-dom'
        },
        classnames: {
          amd: 'classnames',
          commonjs: 'classnames',
          commonjs2: 'classnames',
          module: 'classnames',
          umd: 'classnames',
          root: 'classnames'
        },
        'styled-components': {
          amd: 'styled-components',
          commonjs: 'styled-components',
          commonjs2: 'styled-components',
          module: 'styled-components',
          umd: 'styled-components',
          root: 'styled-components'
        }
      }
    } as any,
    jelperCfg?.webpackCfg || {}
  );
}

const buildUmd = async (buildOpts: BuildOpts) => {
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
        reject(err);
        if (buildOpts.debug) {
          throw err;
        }
        return;
      }
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

export default async function (buildOpts: BuildOpts) {
  if (buildOpts.debug !== true) {
    return buildUmd(buildOpts);
  }
  const spinner = ora('UMD Module Creating...').start();
  return buildUmd(buildOpts).then(() => {
    spinner.succeed('UMD Module Create Success');
  }, () => {
    spinner.fail(chalk.red('UMD Module Create Fail'));
  });
}
