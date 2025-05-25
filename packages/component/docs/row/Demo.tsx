import React from 'react';
import { Row } from '@jelper/component';

const itStyle = {
  minHeight: '24px',
  background: 'blue',
};

export default () => (<>
  <Row gap="16px">
    <Row.Item style={itStyle}></Row.Item>
    <Row.Item style={itStyle}></Row.Item>
    <Row.Item style={itStyle}></Row.Item>
  </Row>
  <br />
  <Row gap="16px">
    <Row.Item style={itStyle}></Row.Item>
    <Row.Item style={itStyle}></Row.Item>
    <Row.Item style={itStyle}></Row.Item>
    <Row.Item style={itStyle}></Row.Item>
  </Row>
</>);
