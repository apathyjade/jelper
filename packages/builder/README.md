# @jelper/builder

CLI 构建工具，封装 Webpack 5 + Babel 7 + TypeScript，提供统一的 build/serve/test/init 命令。

## 安装

```bash
npm install @jelper/builder --save-dev
```

## CLI 命令

### `jelper build`

构建包，输出 CJS + ESM + 类型声明。

```bash
jelper build           # 生产构建
jelper build --debug   # 调试模式
```

构建产物：

| 目录 | 格式 | 用途 |
|------|------|------|
| `lib/` | CommonJS | `main` 入口 |
| `es/` | ES Module | `module` 入口 |
| `types/` | .d.ts | 类型声明 |
| `dist/` | UMD2 | CDN 引用 |

### `jelper serve`

启动 Webpack DevServer，实时预览文档。

```bash
jelper serve
```

### `jelper test`

运行 Jest 测试（内置 ts-jest + jsdom）。

```bash
jelper test
```

### `jelper init`

交互式创建新包模板。

```bash
jelper init
```

## 配置文件

在包根目录创建 `jelper.config.mjs`，配置会合并到 Webpack/Jest 默认配置：

```js
export default {
  webpackCfg: {
    externals: { react: 'React' },
    // webpack-merge 支持的任何配置
  },
  jestCfg: {
    // Jest 配置项
  }
};
```

## 依赖

- React >=18.0.0（peer）
export default {
  // webpackMerge 合并
  webpackCfg: {}
}
```