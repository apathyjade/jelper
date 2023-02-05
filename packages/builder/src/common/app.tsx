
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MDXProvider } from '@mdx-js/react';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
const scope = {

}

// @ts-ignore
const requireComponent = require.context(
    process.env.Project_Path + '/docs',
    true,
    /\.mdx/
  )
const Contents = requireComponent.keys().map((path: string) => requireComponent(path).default)

const components = {
  em: props => <i {...props } />,
  code: props => (
    <LiveProvider code={props.children} scope={scope}>
      <div>
        <LiveEditor />
      </div>
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

const App = () => {
  return <MDXProvider components={components}>
    {
      Contents.map((It, index) => <It key={index} />)
    }
  </MDXProvider>
}

// @ts-ignore
const root = createRoot(document.getElementById('root'));
root?.render(<App />);
