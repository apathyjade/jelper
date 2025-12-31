import { Col } from '@jelper/component';

const itStyle = {
  background: '#a1a1fb',
  textAlign: 'center',
};
export default () => (
  <>
    <Col $gap="16px" style={{ height: '160px' }}>
      <Col.Item style={itStyle} $fixed $height={36}></Col.Item>
      <Col.Item style={itStyle}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={i}> {i}</div>
        ))}
      </Col.Item>
      <Col.Item style={itStyle} $fixed $height={36}></Col.Item>
    </Col>
  </>
);
