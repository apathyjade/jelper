
// @ts-ignore
import { DEFAULT_PARSE_FRONT_MATTER } from '@docusaurus/utils';
import requireHelper from '../utils/require-helper.js';
import { babelrc } from './index.js';
import { resolveByBasePath, resolveByRootPath } from '../common/index.js';
import mdxPreprocessor from '../utils/mdxPreprocessor.js';

const aliasList = [
  'tslib',
  'lodash',
  'react',
  'react-dom',
  'history',
  'antd',
  '@mdx-js/react',
  '@mdx-js/loader',
  '@babel/runtime',
  '@types/lodash',
  '@types/node',
  '@types/react',
  '@types/react-dom',
];

const cfg: any = async() => {
// @ts-ignore
  const [
    babelLoaderPath,
    mdxLoaderPath,
    styleLoaderPath,
    cssLoaderPath,
    sassLoaderPath
  ] = await Promise.all([
    requireHelper.resolve('babel-loader'),
    requireHelper.resolve('@docusaurus/mdx-loader'), // @docusaurus/mdx-loader | @mdx-js/loader
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
    `${await requireHelper.resolve('highlight.js')}/styles`,
  ];

  const alias = (
    await Promise.all(
      aliasList.map((name: string) => (
        (async () => [name, await requireHelper.resolve(name)])
      )())
    )
  ).reduce((res: any, item: any) => ({
    [item[0]]: item[1],
  }), {
    '@theme': resolveByRootPath('./public/components'),
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
          test: /\.(mdx?)$/,
          include,
          use: [
            {
              loader: mdxLoaderPath,
              options: {
                markdownConfig: {
                  preprocessor: mdxPreprocessor,
                  parseFrontMatter: async (params: any) => {
                    return await params.defaultParseFrontMatter(params)
                  },
                  anchors: {},
                  mdx1Compat: {},
                },
              }
            },
          ]
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
          test: /module\.(scss|css)$/,
          include,
          use: [
            {
              loader: styleLoaderPath,
            }, {
              loader: cssLoaderPath,
              options: { modules: true }
            }, {
              loader: sassLoaderPath,
            }
          ]
        },
        {
          test: /\.(scss|css)$/,
          include,
          exclude: /\.module\.(scss|css)$/,
          use: [
            {
              loader: styleLoaderPath,
            }, {
              loader: cssLoaderPath,
              options: { modules: false }
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
