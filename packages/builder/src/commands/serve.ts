
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlPlugin from 'html-webpack-plugin';

import { babelrc } from '../config/index.js';
import { resolveByRootPath, resolveByBasePath, getModulePath, basePath } from '../common/index.js';

const getOpts = () => ({
  mode: 'development' as 'development',
  entry: resolveByRootPath('./src/common/app.tsx'),
  output: {
    filename: 'bundle.js',  // 输出文件名
    path: resolveByBasePath('./dist')  // 输出目录
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
            loader: getModulePath('@mdx-js/loader'),
            options: {}
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
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: resolveByRootPath('./assets/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.Project_Path': JSON.stringify(basePath),
    }),
  ],
})

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
