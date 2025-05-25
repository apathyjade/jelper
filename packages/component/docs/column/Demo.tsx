
import React from 'react';
import { Column } from '@jelper/component';

const itStyle = {
  background: 'blue',
};

export default () => (<>
  <Column gap="16px">
    <Column.Item style={itStyle}>
      <div style={{ height: '120px' }}>aa</div>
    </Column.Item>
    <Column.Item style={itStyle} >
      <div style={{ height: '80px' }}></div>
    </Column.Item>
    <Column.Item style={itStyle}>
      <div style={{ height: '160px' }}></div>
    </Column.Item>
  </Column>
</>);
