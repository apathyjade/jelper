import { Column } from '@jelper/component';

const itStyle = {
  background: '#a1a1fb',
  textAlign: 'center',
};
export default () => (
  <>
    <Column $gap="16px" style={{ height: '160px' }}>
      <Column.Item style={itStyle} $fixed $height={36}></Column.Item>
      <Column.Item style={itStyle}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={i}> {i}</div>
        ))}
      </Column.Item>
      <Column.Item style={itStyle} $fixed $height={36}></Column.Item>
    </Column>
  </>
);
