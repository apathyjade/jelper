import React from 'react';
import { Layout } from '@jelper/component';

export const title = '最小宽度';
export const desc = '主体设置最小宽度，超出滚动';

export default () => (<>
  <Layout style={{ background: '#e9e1e3' }} minWidth="1024px" sideSpace="64px">
    <div style={{ background: 'blue', height: '64px' }} />
  </Layout>
</>);
