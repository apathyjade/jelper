/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-08-29 23:00:59
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-08-29 23:00:59
 */
// import path from 'path';
import React from 'react';
import { createRoot } from 'react-dom/client';

// const requireComponent = require.context(
//     process.env.Project_Path,
//     true,
//     /^index\.mdx$/
//   )
// console.log('---', requireComponent[0])
// const Content = requireComponent(requireComponent[0])

const App = () => {
  return <div />
}

// @ts-ignore
const root = createRoot(document.getElementById('root'));
root?.render(<App />);