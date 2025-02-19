

import React from 'react';
import { createCtxComposer } from '@jelper/context-composer';

const ReactLiveScope = {
  React,
  ...React,
  createCtxComposer
};

export default ReactLiveScope;
