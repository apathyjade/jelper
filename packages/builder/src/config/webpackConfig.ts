// @ts-ignore
import requireHelper from '../utils/require-helper.js';
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


export default async () => {

  const [
    babelLoaderPath,
    mdxBabelLoaderPath,
    styleLoaderPath,
    cssLoaderPath,
    sassLoaderPath
  ] = await Promise.all([
    requireHelper.resolve('babel-loader'),
    requireHelper.resolve('@docusaurus/mdx-loader'),
    requireHelper.resolve('style-loader'),
    requireHelper.resolve('css-loader'),
    requireHelper.resolve('sass-loader'),
  ]);

  const alias = (
    await Promise.all(
      aliasList.map((name: string) => (
        (async () => [name, await requireHelper.resolve(name)])
      )())
    )
  ).reduce((res: any, item: any) => ({
    ...res,
    [item[0]]: item[1],
  }), {});

  return {
    resolve: {
      alias,
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
              loader: babelLoaderPath,
              options: await babelrc(),
            }, {
              loader: mdxBabelLoaderPath,
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
              loader: babelLoaderPath,
              options: await babelrc(),
            }
          ]
        },
        {
          test: /\.(scss|css)$/,
          include,
          use: [
            {
              loader: styleLoaderPath,
            }, {
              loader: cssLoaderPath,
              options: { modules: undefined }
            }, {
              loader: sassLoaderPath,
            }
          ]
        },
      ]
    },
  }
}
