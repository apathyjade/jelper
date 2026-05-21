# @jelper/css

CSS 工具库。提供预置原子类，支持直接引入 CSS、SCSS 源码、SCSS Module 三种使用方式。

## 安装

```bash
npm install @jelper/css
```

## 使用方式

### 方式一：引入 CSS

```tsx
import '@jelper/css/dist/index.css';
// 或
import '@jelper/css';
```

### 方式二：SCSS 源码

```scss
@import '@jelper/css/lib/index.scss';
```

### 方式三：SCSS Module

```scss
@import '@jelper/css/lib/index.module.scss';
```

## 工具类

| 类别 | 类名模式 | 说明 |
|------|----------|------|
| 颜色 | `.aj-color-{name}` `.aj-bg-{name}` | 文字/背景色 |
| 字体 | `.aj-fs-{size}` `.aj-fw-{weight}` | 字号/字重 |
| 间距 | `.aj-m{t\|r\|b\|l}-{n}` `.aj-p{t\|r\|b\|l}-{n}` | 外边距/内边距 |
| Flex | `.aj-flex` `.aj-justify-{value}` `.aj-align-{value}` | flex 布局 |
| 宽度 | `.aj-w-{n}` `.aj-w-{n}px` | 百分比/固定宽度 |
| 文本 | `.aj-text-{align}` `.aj-text-{overflow}` | 对齐/溢出 |
| 圆角 | `.aj-radius-{n}` | 圆角 |
| 旋转 | `.aj-rotate-{deg}` | 旋转角度 |
| 定位 | `.aj-pos-{position}` | position |
| Gap | `.aj-gap-{n}` | 间距 |
