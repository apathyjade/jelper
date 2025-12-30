
import React from 'react';
import { Column } from '@jelper/component';

const itStyle = {
  background: '#a1a1fb',
};

export default () => (<>
  <Column $gap="16px" style={{ height: '160px' }}>
    <Column.Item style={itStyle} $height="12px">
    </Column.Item>
    <Column.Item style={itStyle} $height="24px" >
    </Column.Item>
    <Column.Item style={itStyle} $height="48px">
    </Column.Item>
  </Column>
</>);
