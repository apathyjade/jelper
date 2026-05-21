# @jelper/css — CSS 工具库

## 简介
提供预置 CSS 原子类，通过 SCSS 编译。支持直接引入 CSS 文件或使用 SCSS 源码。

## 安装
```bash
npm install @jelper/css
```

## 使用方式

### 方式一：直接引入 CSS
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

## 工具类列表

### 颜色 (color)
| 类名 | 说明 |
|------|------|
| `.aj-color-{name}` | 文字颜色 |
| `.aj-bg-{name}` | 背景颜色 |
| `.aj-border-{name}` | 边框颜色 |

### 字体 (font)
| 类名 | 说明 |
|------|------|
| `.aj-fs-{size}` | 字号 |
| `.aj-fw-{weight}` | 字重 |
| `.aj-font-{family}` | 字体 |

### 间距 (space)
| 类名 | 说明 |
|------|------|
| `.aj-m{t|r|b|l}-{n}` | 外边距 |
| `.aj-p{t|r|b|l}-{n}` | 内边距 |

### Flex 布局
| 类名 | 说明 |
|------|------|
| `.aj-flex` | display: flex |
| `.aj-flex-{direction}` | flex-direction |
| `.aj-justify-{value}` | justify-content |
| `.aj-align-{value}` | align-items |

### 宽度 (width)
| 类名 | 说明 |
|------|------|
| `.aj-w-{n}` | 宽度百分比 |
| `.aj-w-{n}px` | 宽度像素值 |

### 文本 (text)
| 类名 | 说明 |
|------|------|
| `.aj-text-{align}` | 文本对齐 |
| `.aj-text-{overflow}` | 文本溢出 |
| `.aj-text-{transform}` | 文本转换 |

### 更多
| 类名 | 说明 |
|------|------|
| `.aj-rotate-{deg}` | 旋转 |
| `.aj-radius-{n}` | 圆角 |
| `.aj-pos-{position}` | 定位 |
| `.aj-gap-{n}` | gap 间距 |

## 依赖要求
- React >=18.0.0（仅文档需要）
- styled-components >=6.0.0（仅文档需要）
