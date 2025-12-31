import { Col, Row } from '@jelper/component';

const itStyle = {
  background: '#a1a1fb',
  textAlign: 'center',
};

const subItStyle = {
  background: '#f4d7a0',
};

export const title = '嵌套使用';
export const desc = (
  <div>
    <div>
      正常情况直接嵌套会多一层div元素，为了避免多余div,可以使用
      Col.ColItem/Col.RowItem 来代替 Col.item, 这样子元素就具备Col，Row能力
    </div>
  </div>
);

export default () => (
  <>
    <Col $gap={16}>
      <Col.Item style={itStyle} $fixed $height={36}>
        <Row $gap={8} style={{ height: '100%' }}>
          <Row.Item style={subItStyle}>1</Row.Item>
          <Row.Item style={subItStyle}>2</Row.Item>
          <Row.Item style={subItStyle}>3</Row.Item>
          <Row.Item style={subItStyle}>4</Row.Item>
          <Row.Item style={subItStyle}>5</Row.Item>
        </Row>
      </Col.Item>
      <Col.ColItem $gap={8} style={itStyle} $height={160}>
        <Col.Item style={subItStyle}>1</Col.Item>
        <Col.Item style={subItStyle}>2</Col.Item>
        <Col.Item style={subItStyle}>3</Col.Item>
        <Col.Item style={subItStyle}>4</Col.Item>
        <Col.Item style={subItStyle}>5</Col.Item>
      </Col.ColItem>
      <Col.RowItem $gap={8} style={{ ...itStyle, height: '36px' }}>
        <Row.Item style={subItStyle}>1</Row.Item>
        <Row.Item style={subItStyle}>2</Row.Item>
        <Row.Item style={subItStyle}>3</Row.Item>
        <Row.Item style={subItStyle}>4</Row.Item>
        <Row.Item style={subItStyle}>5</Row.Item>
      </Col.RowItem>
    </Col>
    <br />
  </>
);
