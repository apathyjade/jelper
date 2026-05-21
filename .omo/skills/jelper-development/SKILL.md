# Jelper 项目开发 Skill

Jelper 是一个功能齐全的 JavaScript/TypeScript 工具库集合，采用 Monorepo 架构管理。

**适用场景**: 对 `@jelper/*` 系列包或根项目进行修改、新增包、修复 bug、更新文档。

---

## 1. 项目架构

### 1.1 技术栈总览

| 层次 | 技术 | 备注 |
|------|------|------|
| **包管理** | Rush 5.164.0 + pnpm 10.26.0 | `rush update` 安装依赖，`rush build` 构建所有包 |
| **构建工具** | @jelper/builder (定制 CLI) | 基于 Webpack 5 + Babel 7 + TypeScript |
| **测试** | Jest (@jest/globals) | 部分包使用，另有 Cypress 组件测试 |
| **文档** | Docusaurus 3 | 部署在 GitHub Pages |
| **样式** | SCSS + styled-components 6 + antd 5 | |
| **React** | 18.x / 19.x | 包之间版本不一致，需注意 peerDependencies |

### 1.2 目录结构

```
jelper/
├── common/                   # Rush 公共脚本 (自动生成，勿动)
├── packages/                 # 所有子包 (11个)
│   ├── builder/             # CLI 构建工具 (@jelper/builder)
│   ├── component/           # React 组件库 (styled-components)
│   ├── context-composer/    # React Context 组合工具
│   ├── css/                 # CSS 工具集 (SCSS)
│   ├── di/                  # 依赖注入
│   ├── enum/                # 枚举工具库
│   ├── handler/             # 事件处理器工具集
│   ├── hooks/               # React Hooks 工具集
│   ├── notify/              # 通知器 (发布订阅模式)
│   ├── promise/             # Promise 辅助工具
│   └── store/               # 轻量级状态管理
├── website/                  # Docusaurus 文档站点
├── .github/workflows/       # CI/CD 配置
├── .omo/                    # OpenCode 工作文件
├── rush.json                # Rush 配置 (所有包注册在此)
├── .editorconfig            # 编码风格配置
└── .node-version            # v22
```

### 1.3 包注册机制

所有包必须在 `rush.json` 的 `projects` 数组中注册：

```json
{
  "packageName": "@jelper/hooks",
  "projectFolder": "packages/hooks",
  "tags": ["react", "tools", "helper", "hooks"],
  "reviewCategory": "production",
  "shouldPublish": true
}
```

新增包时需要在 `rush.json` 中注册，并确保包名以 `@jelper/` 开头。

### 1.4 Repo 信息

- **GitHub**: https://github.com/apathyjade/jelper
- **License**: ISC
- **Author**: apathyjade@outlook.com
- **Node**: >=22
- **分支策略**:
  - `master` — 主分支，发布正式版
  - `beta` — 测试版发布
  - `development` — 开发分支

---

## 2. 包规范 (Package Convention)

### 2.1 标准 package.json 结构

```json
{
  "name": "@jelper/xxx",
  "version": "1.0.0",
  "description": "包描述",
  "main": "lib/index.js",       // CJS 入口
  "module": "es/index.js",      // ESM 入口
  "types": "types/index.d.ts",  // 类型声明
  "scripts": {
    "build": "jelper build",       // 构建
    "serve": "jelper serve",       // 开发服务器
    "test": "jelper test"          // 测试
  },
  "files": [
    "package.json",
    "README.md",
    "es/**",
    "lib/**",
    "types/**"
  ],
  "publishConfig": {
    "access": "public"
  },
  "peerDependencies": { },
  "devDependencies": {
    "@jelper/builder": "workspace:*",
    "@types/node": "~22.0.0"
  }
}
```

**关键约定**:
- `main` → `lib/index.js` (CJS)
- `module` → `es/index.js` (ESM)
- `types` → `types/index.d.ts`
- `@jelper/builder` 作为 `workspace:*` 的 devDependency
- 构建产物目录: `lib/`, `es/`, `types/`, `dist/` (均被 gitignore)

### 2.2 标准 tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "declaration": true,
    "declarationDir": "./types",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "skipLibCheck": true,
    "sourceMap": false,
    "pretty": true,
    "lib": ["es5", "es6", "dom"],
    "target": "es5",
    "outDir": "./lib",
    "jsx": "react"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.d.ts"]
}
```

**重要**: 不同包的目标版本可能不同：
- hooks/context-composer/component: `target: "es2015"`, `module: "ESNext"`, `jsx: "react-jsx"`
- 纯工具包: `target: "es5"` 或 `"es6"`, `jsx: "react"`
- builder: `module: "node16"`, `moduleResolution: "node16"`, `target: "ES2016"`

### 2.3 标准 jelper.config.mjs

```js
export default {
  webpackCfg: {
    // webpack-merge 配置
    externals: {
      react: 'React'
    }
  },
  jestCfg: {
    // Jest 配置
  }
};
```

包根目录下的 `jelper.config.mjs` 会被 `@jelper/builder` 读取，通过 `webpack-merge` 合并到默认 Webpack 配置中。

### 2.4 源码组织

```
packages/xxx/
├── src/
│   ├── index.ts           # 入口文件，barrel export 模式
│   ├── types.ts           # 类型定义 (或独立的 .d.ts)
│   ├── feature-a.ts       # 功能模块
│   └── feature-b.ts
├── __tests__/             # 测试目录
│   ├── utils.ts           # 测试工具函数
│   └── feature-a.test.ts  # 测试文件
├── docs/                  # 文档 Demo 组件
│   ├── Demo.tsx           # 演示组件
│   └── FeatureDemo.tsx
├── package.json
├── tsconfig.json
├── jelper.config.mjs
└── README.md
```

---

## 3. 编码规范

### 3.1 格式约定

| 规则 | 值 |
|------|------|
| 缩进 | 2 空格 |
| 换行 | LF |
| 尾随空格 | 删除 |
| 文件末尾空行 | 保留 |
| 行最大长度 | 100 字符 |
| 引号 | 代码中双引号 |
| 分号 | 保留 |

来源: `.editorconfig`

### 3.2 TypeScript 风格

- **严格模式**: `strict: true`
- **命名**: 
  - 函数/变量 → `camelCase`
  - 类型/接口/类/enum → `PascalCase`
  - 文件 → `camelCase.ts` (如 `useBoolState.ts`)
  - 测试文件 → `feature-name.test.ts` (如 `useBoolState.test.tsx`)
- **导出模式**: barrel export（`src/index.ts` 集中导出）
- **默认导出**: 每个功能模块使用 `export default`
- **命名导出**: 入口文件使用命名导出
- **接口前缀**: 无 `I` 前缀 (如 `Options`, `StorageType`)
- **枚举**: 使用字符串枚举

### 3.3 导入规范

```typescript
// 标准导入
import { useState } from 'react';
import { Command } from 'commander';
import fs from 'fs-extra';

// 相对导入
import { Options } from './types';
import useRtCb from './useRtCb';

// 工具库
import { debounce } from 'lodash';
```

- React hooks 包内使用相对导入
- workspace 包引用使用 `"workspace:*"` 协议
- 外部依赖版本号使用 `~` 前缀 (如 `"~5.4.5"`)

### 3.4 文件头注释 (保留风格)

```typescript
/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-21 12:20:40
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-21 12:20:40
 */
```

### 3.5 错误处理

- 关键路径 `throw new Error('message')`
- 数据解析使用 try/catch 返回 undefined
- 没有全局错误处理器模式

### 3.6 React 代码风格

- **组件**: 函数式组件, 无类组件
- **Hooks**: 自定义 hooks 命名以 `use` 开头
- **JSX**: `jsx: "react-jsx"` (React 19 风格)
- **状态**: `useState` + `useCallback` 模式
- **样式**: styled-components (运行时 CSS-in-JS)

---

## 4. 构建系统

### 4.1 常用命令

```bash
# 全局工具安装
npm install -g @microsoft/rush@5.164.0 pnpm@10.26.0

# 安装依赖 (在根目录)
rush update

# 构建所有包
rush build

# 单个包开发 (在包目录)
cd packages/hooks
jelper serve    # 启动开发服务器
jelper build    # 构建
jelper test     # 运行测试
```

### 4.2 构建产物

| 目录 | 格式 | 用途 |
|------|------|------|
| `lib/` | CJS (CommonJS) | `main` 入口 |
| `es/` | ESM (ES Module) | `module` 入口 |
| `types/` | .d.ts 声明文件 | `types` 入口 |
| `dist/` | 打包后的文件 | CSS 包等 |

### 4.3 Builder 工具 (@jelper/builder)

```bash
jelper init                # 用模板创建新包
jelper serve               # webpack-dev-server 开发
jelper build               # 生产构建
jelper build --debug       # Debug 模式
jelper test                # 运行测试
jelper copy -i src -o dst  # 复制文件
```

builder 的初始化模板在 `packages/builder/tpl/` 目录下，使用 gulp 模板引擎。

### 4.4 测试

- **框架**: Jest (@jest/globals)
- **测试工具**: @testing-library/react, @testing-library/dom
- **环境**: jest-environment-jsdom (jsdom)
- **写法**:
  ```typescript
  import {expect, test} from '@jest/globals';
  import { renderHook, act } from '@testing-library/react';
  
  test("验证功能名", async () => {
    const { result } = renderHook(() => useBoolState(false));
    expect(result.current[0]).toBe(false);
  });
  ```
- **定时器测试**: 使用 `jest.useFakeTimers()` / `jest.useRealTimers()`
- **测试文件位置**: `__tests__/` 目录下，文件名为 `*.test.ts` 或 `*.test.tsx`

---

## 5. 发布流程

### 5.1 正式发布 (master 分支)

```bash
rush publish -p --include-all -n ${NPM_TOKEN}
```
使用 OIDC 认证 (`rush publish-oidc`)，见 CI 配置 `.github/workflows/main.yml`。

### 5.2 测试版发布 (beta 分支)

```bash
rush publish --apply
```

### 5.3 CI/CD 流程

GitHub Actions 在 push 到 `master` 或 `beta` 时触发：
1. 安装 Rush
2. `rush update` + `rush build`
3. 发布到 npm
4. 构建文档并推送到 `website` 分支

### 5.4 版本号

各包独立版本管理，使用语义化版本。

---

## 6. 常见开发任务

### 6.1 新增一个包

1. 复制现有包结构或使用 `jelper init`
2. 在 `rush.json` 的 `projects` 中添加条目
3. 实现 `src/index.ts` 入口
4. 添加 `jelper.config.mjs`
5. 运行 `rush update` 安装依赖

### 6.2 修改已有包

1. 进入包目录
2. 运行 `jelper serve` 启动开发服务器
3. 修改源码，测试
4. 运行 `jelper build` 构建
5. 确保 `lsp_diagnostics` 干净

### 6.3 包间依赖

- 内部依赖使用 `"workspace:*"` 版本
- 所有 React 包需在 `peerDependencies` 声明 react/react-dom
- 注意包间的 React 版本兼容性（18 vs 19）

### 6.4 文档更新

- 文档在 `website/` 目录下
- 包文档在各自的 `docs/` 目录（Demo 组件）
- 构建文档: `cd website && npm run build`
- 文档自动部署到 GitHub Pages

---

## 7. 注意事项

### 7.1 项目现状

- **React 版本碎片化**: 部分包用 React 18，部分用 React 19。`website/package.json` 通过 `resolutions` 将 react 固定在 18.2.0
- **`@types/node` 版本不统一**: 从 `~18.0.0` 到 `~24.10.1` 都有
- **测试覆盖不完整**: 只有 hooks 和 notify 有完整测试，其他包测试缺失
- **Linter 不一致**: component 包有 Biome，其他包无统一 linter
- **部分依赖较旧**: enum 包仍有 mdx v1 依赖

### 7.2 修改时的禁止项

- ❌ 不要修改 `common/` 下的 Rush 自动生成脚本
- ❌ 不要提交构建产物 (`lib/`, `es/`, `types/`, `dist/`)
- ❌ 不要修改根 `package.json`（只含 `"private": true`）
- ❌ 不要移除文件头注释中的作者信息
- ❌ 不要引入新的 monorepo 工具（保留 Rush + pnpm）

### 7.3 修改时的强制项

- ✅ 保持 `strict: true` 的 TypeScript 配置
- ✅ 新增的包遵循现有的 package.json 模板
- ✅ 使用 barrel export 模式
- ✅ 运行 `lsp_diagnostics` 确保无类型错误
- ✅ 遵循 `.editorconfig` 格式
- ✅ 使用 `"workspace:*"` 引用 workspace 内部包

---

## 8. 开发者环境

| 工具 | 版本 | 备注 |
|------|------|------|
| Node.js | 22.21.1 | `.node-version` |
| npm | 11.7.0 | |
| Rush | 5.164.0 | 必须全局安装 |
| pnpm | 10.26.0 | Rush 管理，也需全局安装 |
| TypeScript | 5.x | 各包版本略有不同 |
| VS Code | - | 中文语言包 |
| OS | Windows 11 | PowerShell 5.1 |

---

*本文档自动生成于项目分析。修改此文件时应同步更新。*
