import React from 'react';
import { Row } from '@jelper/component';

const itStyle = {
  minHeight: '24px',
  background: 'blue',
};

export default () => (<>
  <Row gap="36px">
    <Row.Item style={itStyle} fixed width={120}></Row.Item>
    <Row.Item style={itStyle} fixed width={160}></Row.Item>
    <Row.Item style={itStyle} ></Row.Item>
  </Row>
  <br />
  <Row gap={16}>
    <Row.Item style={itStyle} fixed width={120}></Row.Item>
    <Row.Item style={itStyle}  maxWidth={160}></Row.Item>
    <Row.Item style={itStyle}  width={100} scale={1}></Row.Item>
    <Row.Item style={itStyle}  width={150} scale={1.5}></Row.Item>
    <Row.Item style={itStyle}  width={200} scale={2}></Row.Item>
  </Row>
  <br />
</>);
