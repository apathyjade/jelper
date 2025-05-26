
import React from 'react';
import hljs, { HighlightOptions } from 'highlight.js';
import 'highlight.js/styles/github-dark.min.css';
import $css from './index.module.scss';

const Code = ({ text, children, language = 'js' }) => {
  return (
    <pre className={$css.pre}>
      <code className={`${$css.code} hljs`} dangerouslySetInnerHTML={{ __html: hljs.highlight(text || children, {language}).value }} />
    </pre>
  );
};

export default Code;
