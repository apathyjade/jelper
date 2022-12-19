
import webpack from 'webpack';

import { babelrc } from '../config/index.js';
import { resolveByBasePath, getModulePath } from '../common/index.js';

const getOpts = () => ({
  mode: 'production' as 'production',
  entry: resolveByBasePath('./src/index.tsx'),
  output: {
    filename: 'index.js',  // 输出文件名
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
  ],
  experiments: {
    outputModule: true,
  },
})

const outputs = [
  {
    path: resolveByBasePath('./es'),
    library: {
      type: 'module',
    },
  }, {
    path: resolveByBasePath('./lib'),
    library: {
      type: 'commonjs',
    }
  }
]

export default async function () {
  console.log('start build');
  const opts = getOpts();

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