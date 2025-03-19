
// @ts-ignore
import { DEFAULT_PARSE_FRONT_MATTER } from '@docusaurus/utils';
import requireHelper from '../utils/require-helper.js';
import { babelrc } from './index.js';
import { resolveByBasePath, resolveByRootPath } from '../common/index.js';

const parseFrontMatter = DEFAULT_PARSE_FRONT_MATTER;

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
  '@docusaurus/theme-classic',
  '@docusaurus/plugin-content-docs',
  '@docusaurus/theme-common',
  '@docusaurus/utils-validation'
]

const cfg: any = async() => {
// @ts-ignore
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

  const include = [
    resolveByRootPath('./'),
    resolveByBasePath('./docs/'),
    resolveByBasePath('./src/'),
    await requireHelper.resolve('@babel/plugin-transform-runtime'),
    await requireHelper.resolve('prism-themes'),
    await requireHelper.resolve('@docusaurus/theme-classic'),
    await requireHelper.resolve('@docusaurus/plugin-content-docs'),
    await requireHelper.resolve('@docusaurus/theme-common'),
  ];

  const alias = (
    await Promise.all(
      aliasList.map((name: string) => (
        (async () => [name, await requireHelper.resolve(name)])
      )())
    )
  ).reduce((res: any, item: any) => ({
    [item[0]]: item[1],
    ...res,
  }), {
    '@theme': await requireHelper.resolve('@docusaurus/theme-classic/lib/theme'),
    '@docusaurus/': await requireHelper.resolve('@docusaurus/core/lib/client/exports/'),
  });

  return {
    resolve: {
      alias,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.less', '.scss'],
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
            },
            {
              loader: mdxBabelLoaderPath,
              options: {
                markdownConfig: {
                  parseFrontMatter,
                },
              },
            },
          ],
        },
        {
          test: /\.(jsx?|[cm]?ts|tsx|js)$/,
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

// @ts-ignore
export default cfg;
