
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';
import fs from 'fs-extra'

import { webpackConfigBase } from '../config/index.js';
import { resolveByRootPath, resolveByBasePath, basePath, getJelperCfg } from '../common/index.js';

const getPackageJson = (() => {
  const packageJson = null
  return () => {
    if (packageJson) {
      return packageJson;
    }
    return fs.readJSONSync(resolveByBasePath('./package.json'));
  };
})();

const getOpts = async() => {
  const jelperCfg: any = await getJelperCfg();
  return merge(
    await webpackConfigBase(),
    {
      mode: 'development',
      entry: resolveByRootPath('./public/app.tsx'),
      output: {
        filename: 'bundle.js' // 输出文件名
      },
      resolve: {
        alias: {
          [getPackageJson().name]: resolveByBasePath('./src')
        }
      },
      watch: true,
      devServer: {
        open: true,
        server: 'http',
        allowedHosts: ['127.0.0.1', 'localhost'],
        port: 8080,
        proxy: {
          '/[^.]+': {
            target: 'http://localhost:8080',
            pathRewrite: { '/[^.]+$': '/' },
          },
        },
        static: {
          directory: resolveByRootPath('./public')
        }
      },
      plugins: [
        new HtmlPlugin({
          template: resolveByRootPath('./public/index.html')
        }),
        new webpack.DefinePlugin({
          'process.env.Project_Path': JSON.stringify(basePath)
        })
      ]
    } as any,
    jelperCfg?.webpackCfg || {},
    { externals: [] }
  );
}

export default async function () {
  console.log('start serve');
  const opts = await getOpts() as any;
  const compiler = webpack(opts as any, (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stats?.toString({
      chunks: false,
      colors: true, // 在控制台展示颜色
    }));
  });
  const devServerOptions = { ...opts.devServer, open: true };
  const server = new WebpackDevServer(devServerOptions, compiler);
  server.start();
}
