
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



export default {
  externals: {
    react: 'react',
    '@alifd/next': '@alifd/next',
  },
  resolve: {
    alias: {
      'tslib': requireHelper.resolve('tslib'),
      'lodash': requireHelper.resolve('lodash'),
      'react': requireHelper.resolve('react'),
      'react-dom': requireHelper.resolve('react-dom'),
      '@mdx-js/react': requireHelper.resolve('@mdx-js/react'),
      '@babel/runtime': requireHelper.resolve('@babel/runtime'),
      '@types/lodash': requireHelper.resolve('@types/lodash'),
      '@types/node': requireHelper.resolve('@types/node'),
      '@types/react': requireHelper.resolve('@types/react'),
      '@types/react-dom': requireHelper.resolve('@types/react-dom'),
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