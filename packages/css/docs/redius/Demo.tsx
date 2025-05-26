import React from 'react';
import '@jelper/css';

export default () => {
  return <div>
    <div className="radius" style={{ width: '32px', height: '32px', background: 'var(--aj_color_brand)' }}></div>
    <br />
    <div className="radius-s" style={{ width: '32px', height: '32px', background: 'var(--aj_color_brand)' }}></div>
    <br />
    <div className="radius-m" style={{ width: '32px', height: '32px', background: 'var(--aj_color_brand)' }}></div>
    <br />
    <div className="radius-l" style={{ width: '32px', height: '32px', background: 'var(--aj_color_brand)' }}></div>
  </div>
};
