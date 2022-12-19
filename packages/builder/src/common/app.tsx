
import React from 'react';
import { createRoot } from 'react-dom/client';

console.log('---', process.env.Project_Path)
const requireComponent = require.context(
    process.env.Project_Path + '/demo',
    true,
    /\.mdx/
  )
const Contents = requireComponent.keys().map((path: string) => requireComponent(path).default)

const App = () => {
  return <div>
    {
      Contents.map((It, index) => <It key={index} />)
    }
  </div>
}

// @ts-ignore
const root = createRoot(document.getElementById('root'));
root?.render(<App />);
