import React from 'react';
import { Column } from '@jelper/component';

const itStyle = {
  background: 'blue',
};

export default () => (<>
  <Column gap="16px" style={{ height: '480px' }}>
    <Column.Item style={itStyle} fixed height={64}></Column.Item>
    <Column.Item style={itStyle} >
      <div style={{ height: '400px' }}></div>
    </Column.Item>
    <Column.Item style={itStyle} fixed height={64}></Column.Item>
  </Column>
</>);
