import { rollup, watch, OutputOptions } from 'rollup';
// import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import mdx from '@mdx-js/rollup'
import serve from 'rollup-plugin-serve'
import html from '@rollup/plugin-html';
import replace from '@rollup/plugin-replace';
import requireContext from 'rollup-plugin-require-context';


import { babelrc, tsconfig } from './config/index.js'
import { resolveByRootPath, basePath } from './common/index.js';
const makeHtmlAttributes = (attributes) => {
    if (!attributes) {
        return '';
    }
    const keys = Object.keys(attributes);
    // eslint-disable-next-line no-param-reassign
    return keys.reduce((result, key) => (result += ` ${key}="${attributes[key]}"`), '');
};
const defaultTemplate = async ({ attributes, files, meta, publicPath, title }) => {
    const scripts = (files.js || [])
        .map(({ fileName }) => {
        const attrs = makeHtmlAttributes(attributes.script);
        return `<script src="${publicPath}${fileName}"${attrs}></script>`;
    })
        .join('\n');
    const links = (files.css || [])
        .map(({ fileName }) => {
        const attrs = makeHtmlAttributes(attributes.link);
        return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
        .join('\n');
    const metas = meta
        .map((input) => {
        const attrs = makeHtmlAttributes(input);
        return `<meta${attrs}>`;
    })
        .join('\n');
    return `
<!doctype html>
<html${makeHtmlAttributes(attributes.html)}>
  <head>
    ${metas}
    <title>${title}</title>
    ${links}
  </head>
  <body>
    <div id="root"></div>
    ${scripts}
  </body>
</html>`;
};

// type NodeEnv = 'production' | 'development'
const isPro = process.env['NODE_ENV'] = 'production'
console.log(isPro)
const opts = {
  input: resolveByRootPath('./src/common/app.tsx'),  
  plugins: [
    //@ts-ignore
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.Project_Path': JSON.stringify(basePath),
    }),
    //@ts-ignore
    typescript(tsconfig),
    resolve(),
    commonjs(),
    requireContext(),
    mdx(),
    //@ts-ignore
    html({
      template: defaultTemplate,
    }),
    babel(babelrc),
    serve({
      open: true,
      openPage: '/',
      verbose: false,

      contentBase: ['dist'],
      host: 'localhost',
      port: 10001,

      //set headers
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      mimeTypes: {
        'application/javascript': ['js_commonjs-proxy']
      },

      onListening(server) {
        const address = server.address()
        const host = address.address === '::' ? 'localhost' : address.address
        // by using a bound function, we can access options as `this`
        const protocol = this.https ? 'https' : 'http'
        console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
      }
    })
  ],
}

export default async function build() {
  const baseOutCfg: OutputOptions = {
    exports: "auto",
    sourcemap: true,
    globals: {
      window: 'window'
    }
  }

  const bundle = await rollup(opts);
  await bundle.write({
    ...baseOutCfg,
    file: "dist/index.js",
    format: "iife",
    name: 'app'
  });

  const watcher = await watch({
    ...baseOutCfg,
    ...opts,
  });
  watcher.on('event', () => {
    // event.code 会是下面其中一个：
    //   START        — 监听器正在启动（重启）
    //   BUNDLE_START — 构建单个文件束
    //   BUNDLE_END   — 完成文件束构建
    //   END          — 完成所有文件束构建
    //   ERROR        — 构建时遇到错误
    //   FATAL        — 遇到无可修复的错误
  });
}