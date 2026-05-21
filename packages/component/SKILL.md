# @jelper/component — React Flex 布局组件库

## 简介
基于 `styled-components` 的 React Flexbox 布局组件，提供 Row/Col 行列系统 + Layout 居中布局。

## 安装
```bash
npm install @jelper/component
```

## API

### `Row` — 水平 Flex 容器
```tsx
import { Row } from '@jelper/component';

<Row $justify="center" $align="flex-start" $gap={16}>
  <div>item</div>
</Row>
```

**Props** (继承 `React.ComponentProps<'div'>`):

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `$justify` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly' \| 'stretch'` | `'flex-start'` | 水平主轴对齐 |
| `$align` | `'flex-start' \| 'flex-end' \| 'center' \| 'stretch'` | `'stretch'` | 垂直交叉轴对齐 |
| `$gap` | `number \| string` | — | 子元素间距 |

### `Col` — 垂直 Flex 容器
```tsx
import { Col } from '@jelper/component';

<Col $justify="center" $align="center" $gap={8}>
  <div>item</div>
</Col>
```

Props 同 `Row`。

### `Row.Item` / `Row.RowItem` / `Row.ColItem`
```tsx
<Row>
  <Row.Item $width={200}>固定宽度</Row.Item>
  <Row.RowItem $scale={2}>按比例伸缩</Row.RowItem>
</Row>
```

**Props**:

| Prop | 类型 | 说明 |
|------|------|------|
| `$fixed` | `boolean` | 固定尺寸模式 |
| `$scale` | `number` | flex 伸缩比例（默认 1）|
| `$width` | `number \| string` | 子项宽度 |
| `$minWidth` | `number \| string` | 最小宽度 |
| `$maxWidth` | `number \| string` | 最大宽度 |

### `Col.Item` / `Col.RowItem` / `Col.ColItem`
类似 Row.Item，但控制的是 `$height` / `$minHeight` / `$maxHeight`。

### `Layout` — 居中布局
```tsx
import { Layout } from '@jelper/component';

<Layout $sideSpace={16} $width="1200px" $minWidth="320px">
  <div>居中内容</div>
</Layout>
```

| Prop | 类型 | 说明 |
|------|------|------|
| `$sideSpace` | `number \| string` | 左右内边距 |
| `$width` | `number \| string` | 内容区宽度 |
| `$minWidth` | `number \| string` | 内容区最小宽度 |
| `$maxWidth` | `number \| string` | 内容区最大宽度 |

## 依赖要求
- React >=18.0.0
- styled-components >=6.0.0
- classnames >=2.0.0
