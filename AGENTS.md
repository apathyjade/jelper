# Jelper 项目开发指南

Jelper 是一个 JavaScript/TypeScript 工具库 Monorepo，提供构建工具链、发布流程和文档自动化。

---

## 技术栈

| 层次 | 技术 |
|------|------|
| 包管理 | Rush 5.164.0 + pnpm 10.26.0 |
| 构建 | @jelper/builder (Webpack 5 + Babel 7 + TypeScript) |
| 测试 | Jest (@jest/globals) + @testing-library/react |
| 文档 | Docusaurus 3 (GitHub Pages) |
| 样式 | SCSS + styled-components 6 + antd 5 |
| React | >=18.0.0（统一 peerDependencies）|

## 目录结构

```
jelper/
├── common/             # Rush 公共配置/脚本（勿手动修改）
├── packages/           # 子包 (11个)
│   ├── builder/       # CLI 构建工具 (@jelper/builder)
│   ├── component/     # React 组件库 (styled-components)
│   ├── context-composer/ # React Context 组合
│   ├── css/           # CSS 工具集 (SCSS)
│   ├── di/            # 依赖注入
│   ├── enum/          # 枚举工具库
│   ├── handler/       # 事件处理器
│   ├── hooks/         # React Hooks (19个)
│   ├── notify/        # 通知器 (发布订阅)
│   ├── promise/       # Promise 辅助工具
│   └── store/         # 轻量级状态管理 (localStorage)
├── website/            # Docusaurus 文档站
├── .github/workflows/ # CI/CD (GitHub Actions)
├── rush.json           # Rush 配置（新增包需在此注册）
└── .editorconfig       # 缩进2空格 LF 最大行100
```

## 常用命令

```bash
# 全局安装
npm install -g @microsoft/rush@5.164.0 pnpm@10.26.0

# 安装依赖 (根目录)
rush update

# 构建所有包
rush build

# 单个包开发 (进入包目录)
jelper serve    # 启动开发服务器
jelper build    # 构建 (输出 lib/ CJS + es/ ESM + types/ d.ts)
jelper test     # 运行测试
```

## 包规范

### package.json 模板
```json
{
  "name": "@jelper/xxx",
  "main": "lib/index.js",
  "module": "es/index.js",
  "types": "types/index.d.ts",
  "scripts": { "build": "jelper build", "serve": "jelper serve", "test": "jelper test" },
  "files": ["package.json", "README.md", "es/**", "lib/**", "types/**"],
  "publishConfig": { "access": "public" },
  "devDependencies": { "@jelper/builder": "workspace:*" }
}
```

### tsconfig.json 模板（React 包用 es2015/ESNext/react-jsx，纯工具包用 es5/react）
```json
{
  "compilerOptions": {
    "strict": true, "declaration": true, "declarationDir": "./types",
    "esModuleInterop": true, "noUnusedLocals": true, "noUnusedParameters": true,
    "skipLibCheck": true, "sourceMap": false,
    "target": "es5", "outDir": "./lib", "jsx": "react"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.d.ts"]
}
```

### jelper.config.mjs
```js
export default { webpackCfg: { externals: { react: 'React' } }, jestCfg: {} };
```

## 编码规范

| 规则 | 值 |
|------|------|
| 缩进 | 2 空格 |
| 换行 | LF |
| 行最大长度 | 100 |
| 命名 | 函数/变量 → camelCase, 类型/接口 → PascalCase |
| 导出 | 每个模块 `export default`, 入口 barrel export |
| 导入 | ES module, 包内相对导入, workspace 包用 `workspace:*` |
| 文件头 | `@Author jade <apathyjade@outlook.com>` |
| 接口前缀 | 无 `I` 前缀 |
| 枚举 | 字符串枚举 |

### React 风格
- 函数式组件，无 class 组件
- Hooks 以 `use` 开头，返回 tuple（如 `[boolean, setter]`）
- styled-components transient props 使用 `$` 前缀
- `useRtCb` / `useRtRef` 避免闭包陷阱
- `useSafeRunner` 防止卸载后 setState

### 测试风格
```
__tests__/<name>.test.tsx    # Jest
import {expect, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
test("验证功能名", async () => { ... });
```

## 发布流程

```bash
# master 正式发布
rush publish -p --include-all -n ${NPM_TOKEN}

# beta 测试版发布
rush publish --apply
```

## 注意事项

### 项目现状
- **React 版本**: 所有包 peerDependencies 统一为 `>=18.0.0`。`website/package.json` 通过 `resolutions` 固定 react 到 18.2.0（兼容 Docusaurus 3）
- **测试覆盖不全**: 仅 hooks + notify 有完整测试
- **Linter 不一致**: 仅 component 包有 Biome，其他包无统一 linter
- **Builder 依赖膨胀**: 56 个运行时依赖，含 antd/styled-components 等不应属于 CLI 工具的包

### 禁止项
- ❌ 不修改 `common/` 下的 Rush 自动生成脚本
- ❌ 不提交构建产物 (`lib/`, `es/`, `types/`, `dist/`)
- ❌ 不修改根 `package.json`（仅含 `"private": true`）
- ❌ 不引入新 monorepo 工具（保留 Rush + pnpm）
- ❌ 不使用 `as any` / `@ts-ignore`（已有 ~15 处待清理）
- ❌ 不加 `console.log` 到生产代码

### 强制项
- ✅ 保持 `strict: true`
- ✅ 新增包遵循现有 package.json 模板 + 注册到 rush.json
- ✅ 使用 barrel export 模式
- ✅ 运行 `lsp_diagnostics` 确保无类型错误
- ✅ 使用 `"workspace:*"` 引用内部包
- ✅ 遵循 `.editorconfig` 格式

## 开发者环境

| 工具 | 版本 |
|------|------|
| Node.js | 22.21.1 |
| Rush | 5.164.0 |
| pnpm | 10.26.0 |
| TypeScript | ~5.x |
| OS | Windows 11 / PowerShell |
