# @jelper/builder — CLI 构建工具使用指南

## 简介
`@jelper/builder` 是 jelper monorepo 的核心 CLI 构建工具，封装 Webpack 5 + Babel 7 + TypeScript，提供统一的 build/serve/test/init 命令。

## 安装
```bash
npm install @jelper/builder --save-dev
```

## CLI 命令

### `jelper build`
构建包，输出 CJS (`lib/`) + ESM (`es/`) + 类型声明 (`types/`)。

```bash
jelper build          # 生产构建
jelper build --debug  # Debug 模式（显示构建详情）
```

### `jelper serve`
启动 Webpack DevServer 开发服务器，实时预览 MDX 文档。

```bash
jelper serve
```

### `jelper test`
运行 Jest 测试（通过内部集成的 ts-jest + jsdom）。

```bash
jelper test
```

### `jelper init`
交互式创建新包模板。

```bash
jelper init
```

### `jelper copy`
复制文件（基于 gulp）。

```bash
jelper copy -i ./src -o ./dist
```

## 配置文件: `jelper.config.mjs`
在包根目录创建，配置会通过 `webpack-merge` 合并到默认 Webpack 配置：

```js
export default {
  webpackCfg: {
    externals: { react: 'React' },  // Webpack 外部依赖
    // ...任意 webpack 配置
  },
  jestCfg: {
    // Jest 配置项
  }
};
```

## 构建产物
| 目录 | 格式 | 用途 |
|------|------|------|
| `lib/` | CJS (CommonJS) | `main` 入口 |
| `es/` | ESM (ES Module) | `module` 入口 |
| `types/` | .d.ts | `types` 入口 |
| `dist/` | UMD (UMD2) | CDN 直接引用 |

## 依赖要求
- React >=18.0.0（peerDependency）
