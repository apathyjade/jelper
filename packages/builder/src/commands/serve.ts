
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlPlugin from 'html-webpack-plugin';
import fs from 'fs-extra';

import { babelrc } from '../config/index.js';
import { resolveByRootPath, resolveByBasePath, getModulePath, basePath } from '../common/index.js';

const getPackage = () => {
  return fs.readJSONSync(resolveByBasePath('./package.json'))
}

const getOpts = () => {
  const { name } = getPackage();
  return {
    mode: 'development' as 'development',
    entry: resolveByRootPath('./src/common/app.tsx'),
    output: {
      filename: 'bundle.js',  // 输出文件名
    },
    watch: true,
    devServer: {
      open: true,
      server: 'http',
      allowedHosts: ['127.0.0.1', 'localhost'],
      port: 8080,
      static: {
        directory: resolveByRootPath('./public'),
      },
    },
    resolve: {
      alias: {
        [name]: resolveByBasePath('./src'),
        // '@mdx-js': getModulePath('@mdx-js'),
      },
      extensions: ['.ts', '.tsx', '.js', 'jsx', 'json', 'css', 'less', 'scss'],
      extensionAlias: {
      '.js': ['.js', '.ts'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts']
      }
    },
    module: {
      rules: [
        {
          test: /\.(mdx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: getModulePath('babel-loader'),
              options: babelrc,
            }, {
              loader: getModulePath('@docusaurus/mdx-loader'),
              options: {
                markdownConfig: {
                },
              }
            }
          ]
        },
        {
          test: /\.(jsx?|[cm]?ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: getModulePath('babel-loader'),
              options: babelrc,
            }
          ]
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: getModulePath('style-loader'),
            }, {
              loader: getModulePath('css-loader'),
              options: { modules: true }
            }, {
              loader: getModulePath('sass-loader'),
            }
          ]
        },
      ]
    },
    plugins: [
      new HtmlPlugin({
        template: resolveByRootPath('./public/index.html'),
      }),
      new webpack.DefinePlugin({
        'process.env.Project_Path': JSON.stringify(basePath),
      }),
    ],
  }
}

export default async function () {
  console.log('start serve');
  const opts = getOpts();

  const compiler = webpack(
    opts,
    (err, stats) => {
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
    }
  );

  const devServerOptions = { ...opts.devServer, open: true };

  const server = new WebpackDevServer(devServerOptions, compiler);

  server.start();
}
