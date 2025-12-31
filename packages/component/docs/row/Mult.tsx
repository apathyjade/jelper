import { Col, Row } from '@jelper/component';

const itStyle = {
  textAlign: 'center',
  background: '#a1a1fb',
};

const subItStyle = {
  textAlign: 'center',
  background: '#f4d7a0',
};

export const title = '嵌套使用';
export const desc = (
  <div>
    <div>
      正常情况直接嵌套会多一层div元素，为了避免多余div,可以使用
      Row.ColItem/Row.RowItem 来代替 Row.item, 这样子元素就具备Col，Row能力
    </div>
  </div>
);

export default () => (
  <>
    <Row $gap={16} style={{ height: '160px' }}>
      <Row.Item style={itStyle} $fixed $width={160}>
        <Col $gap={8}>
          <Col.Item style={subItStyle}>1</Col.Item>
          <Col.Item style={subItStyle}>2</Col.Item>
          <Col.Item style={subItStyle}>3</Col.Item>
          <Col.Item style={subItStyle}>4</Col.Item>
          <Col.Item style={subItStyle}>5</Col.Item>
        </Col>
      </Row.Item>
      <Row.ColItem $gap={8} style={itStyle} $fixed $width={160}>
        <Col.Item style={subItStyle}>1</Col.Item>
        <Col.Item style={subItStyle}>2</Col.Item>
        <Col.Item style={subItStyle}>3</Col.Item>
        <Col.Item style={subItStyle}>4</Col.Item>
        <Col.Item style={subItStyle}>5</Col.Item>
      </Row.ColItem>
      <Row.RowItem $gap={8} style={itStyle}>
        <Row.Item style={subItStyle}>1</Row.Item>
        <Row.Item style={subItStyle}>2</Row.Item>
        <Row.Item style={subItStyle}>3</Row.Item>
        <Row.Item style={subItStyle}>4</Row.Item>
        <Row.Item style={subItStyle}>5</Row.Item>
      </Row.RowItem>
    </Row>
    <br />
  </>
);
