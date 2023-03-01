import fs from 'fs-extra'
import requireHelper from '../../utils/require-helper.cjs';
import { babelrc } from './index.js';
import { resolveByBasePath, resolveByRootPath } from '../common/index.js';
const getPackage = () => {
  return fs.readJSONSync(resolveByBasePath('./package.json'))
}
const include = [
  resolveByRootPath('./'),
  resolveByBasePath('./docs/'),
  resolveByBasePath('./src/'),
  requireHelper.resolve('@babel/plugin-transform-runtime'),
  requireHelper.resolve('prism-themes'),
]
const { name } = getPackage();


export default {
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
            options: { modules: true }
          }, {
            loader: requireHelper.resolve('sass-loader'),
          }
        ]
      },
    ]
  },
}