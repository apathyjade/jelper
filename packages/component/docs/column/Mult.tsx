import { Column, Row } from '@jelper/component';

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
      Column.ColumnItem/Column.RowItem 来代替 Column.item,
      这样子元素就具备Column，Row能力
    </div>
  </div>
);

export default () => (
  <>
    <Column $gap={16}>
      <Column.Item style={itStyle} $fixed $height={36}>
        <Row $gap={8} style={{ height: '100%' }}>
          <Row.Item style={subItStyle}>1</Row.Item>
          <Row.Item style={subItStyle}>2</Row.Item>
          <Row.Item style={subItStyle}>3</Row.Item>
          <Row.Item style={subItStyle}>4</Row.Item>
          <Row.Item style={subItStyle}>5</Row.Item>
        </Row>
      </Column.Item>
      <Column.ColumnItem $gap={8} style={itStyle} $height={160}>
        <Column.Item style={subItStyle}>1</Column.Item>
        <Column.Item style={subItStyle}>2</Column.Item>
        <Column.Item style={subItStyle}>3</Column.Item>
        <Column.Item style={subItStyle}>4</Column.Item>
        <Column.Item style={subItStyle}>5</Column.Item>
      </Column.ColumnItem>
      <Column.RowItem $gap={8} style={{ ...itStyle, height: '36px' }}>
        <Row.Item style={subItStyle}>1</Row.Item>
        <Row.Item style={subItStyle}>2</Row.Item>
        <Row.Item style={subItStyle}>3</Row.Item>
        <Row.Item style={subItStyle}>4</Row.Item>
        <Row.Item style={subItStyle}>5</Row.Item>
      </Column.RowItem>
    </Column>
    <br />
  </>
);
