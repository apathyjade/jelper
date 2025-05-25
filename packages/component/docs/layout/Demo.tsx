import React from 'react';
import { Layout } from '@jelper/component';

export const title = '基础用法';
export const desc = '主体自适应，两侧固定最小间距';

export default () => (<>
  <Layout style={{ background: '#e9e1e3' }} maxWidth="1920px" sideSpace="64px">
    <div style={{ background: 'blue', height: '64px' }} />
  </Layout>
</>);
