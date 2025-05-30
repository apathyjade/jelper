
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MDXProvider } from '@mdx-js/react';
import history from "history/browser";
// import 'prism-themes/themes/prism-vsc-dark-plus.css';

import Code from './components/CodeBlock';

import $style from './app.module.scss';

// import {
//   LiveProvider,
//   LiveEditor,
//   LiveError,
//   LivePreview
// } from 'react-live'
// const scope = {

// }

// @ts-ignore
const requireComponent = require.context(
  // @ts-ignore
    process.env.Project_Path + '/docs',
    true,
    /\.mdx/
  )
const Modules = requireComponent.keys().map((path: string) => {
  const m = requireComponent(path);
  if (!m.frontMatter) {
    m.frontMatter = {};
  }
  if (!m.frontMatter.path) {
    m.frontMatter.path = path.replace(/^\.|(\/index)?\.(md|mdx)$/g, '');
  }
  return m;
}).sort((a, b) => {
  return (a.frontMatter?.order || 0) <= (b.frontMatter?.order || 0) ? 1 : -1;
});

const components = {
  em: props => <i {...props } />,
  code: props => <Code {...props} />
    // <LiveProvider code={props.text} scope={scope}>
    //   {props.children}
    //   <div>
    //     <LiveEditor />
    //   </div>
    //   {/* <LiveError />
    //   <LivePreview /> */}
    // </LiveProvider>
}

const moduleKeyMap = Modules.reduce((res, m) => ({
  ...res,
  [m.frontMatter.path]: m,
}), {})

const App = () => {
  const [key, setKey] = useState<any>('');
  const Main = moduleKeyMap[key]?.default || React.Fragment

  useEffect(() => {
    setKey(history.location.pathname.replace(/\/$/g, ''));
    return history.listen(({ location, action }) => {
      setKey(location.pathname.replace(/\/$/g, ''));
    });
  }, []);

  return <div className={$style.main}>
    <div className={$style.side}>
      {
        Modules.map(it => (
          <div
            className={`${$style.item}${ it.frontMatter.path === key ? ` ${$style.active}` : ''}`}
            onClick={() => history.push(it.frontMatter.path || '/')} key={it.frontMatter.path}>
            {it.frontMatter.title}
          </div>
        ))
      }
    </div>
    <div className={$style.body}>
      <MDXProvider components={components}>
        <Main />
      </MDXProvider>
    </div>
  </div>
}

// @ts-ignore
const root = createRoot(document.getElementById('root'));
root?.render(<App />);
