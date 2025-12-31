import { Col } from '@jelper/component';

const itStyle = {
  background: '#a1a1fb',
};

export default () => (
  <>
    <Col $gap="16px" style={{ height: '160px' }}>
      <Col.Item style={itStyle} $height="12px"></Col.Item>
      <Col.Item style={itStyle} $height="24px"></Col.Item>
      <Col.Item style={itStyle} $height="48px"></Col.Item>
    </Col>
  </>
);
