
import requireHelper from '../../utils/require-helper.cjs';
import { babelrc } from './index.js';
import { resolveByBasePath, resolveByRootPath } from '../common/index.js';

const include = [
  resolveByRootPath('./'),
  resolveByBasePath('./docs/'),
  resolveByBasePath('./src/'),
  requireHelper.resolve('@babel/plugin-transform-runtime'),
  requireHelper.resolve('prism-themes'),
]

const aliasList = [
  'tslib',
  'lodash',
  'react',
  'react-dom',
  'history',
  '@mdx-js/react',
  '@babel/runtime',
  '@types/lodash',
  '@types/node',
  '@types/react',
  '@types/react-dom',
]


export default {
  resolve: {
    alias: aliasList.reduce((res, name) => ({
      ...res,
      [name]: requireHelper.resolve(name),
    }), {}),
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
        include,
        use: [
          {
            loader: requireHelper.resolve('babel-loader'),
            options: babelrc,
          }, {
            loader: requireHelper.resolve('@docusaurus/mdx-loader'),
            options: {
              markdownConfig: {},
            }
          }
        ]
      },
      {
        test: /\.(jsx?|[cm]?ts|tsx)$/,
        include,
        use: [
          {
            loader: requireHelper.resolve('babel-loader'),
            options: babelrc,
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        include,
        use: [
          {
            loader: requireHelper.resolve('style-loader'),
          }, {
            loader: requireHelper.resolve('css-loader'),
            options: { modules: undefined }
          }, {
            loader: requireHelper.resolve('sass-loader'),
          }
        ]
      },
    ]
  },
}
