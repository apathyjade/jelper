# @jelper/component

基于 styled-components 的 React Flex 布局组件库，提供 Row/Col 行列系统 + Layout 居中布局。

## 安装

```bash
npm install @jelper/component
```

## 导入

```tsx
import { Layout, Row, Col } from '@jelper/component';
```

## API

### Row — 水平 Flex 容器

```tsx
<Row $justify="center" $align="stretch" $gap={16}>
  <div>item</div>
</Row>
```

**Props**（继承 `React.ComponentProps<'div'>`）：

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `$justify` | `flex-start \| flex-end \| center \| space-between \| space-around \| space-evenly \| stretch` | `flex-start` | 主轴对齐 |
| `$align` | `flex-start \| flex-end \| center \| stretch` | `stretch` | 交叉轴对齐 |
| `$gap` | `number \| string` | — | 间距（px/rem）|

### Col — 垂直 Flex 容器

```tsx
<Col $justify="center" $align="center" $gap={8}>
  <div>item</div>
</Col>
```

Props 同 Row。

### Row.Item

```tsx
<Row>
  <Row.Item $fixed $width={200}>固定宽度</Row.Item>
  <Row.RowItem $scale={2}>可伸缩项</Row.RowItem>
  <Row.ColItem $gap={8}>混合模式</Row.ColItem>
</Row>
```

| Prop | 类型 | 说明 |
|------|------|------|
| `$fixed` | `boolean` | 固定尺寸模式 |
| `$scale` | `number` | flex 伸缩比例（默认 1）|
| `$width` | `number \| string` | 宽度 |
| `$minWidth` | `number \| string` | 最小宽度 |
| `$maxWidth` | `number \| string` | 最大宽度 |

### Col.Item

类似 Row.Item 但控制 `$height` / `$minHeight` / `$maxHeight`。

### Row.RowItem

水平容器中子项，同时应用 Row 容器样式和子项伸缩样式。

### Col.ColItem

垂直容器中子项，同时应用 Col 容器样式和子项伸缩样式。

### Layout — 居中布局

```tsx
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

## 依赖

- React >=18.0.0
- styled-components >=6.0.0
- classnames >=2.0.0
