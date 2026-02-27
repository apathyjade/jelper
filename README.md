# jelper

一个功能齐全的 JavaScript/TypeScript 工具库集合，采用 Monorepo 架构管理，提供完整的构建工具链、发布流程和文档自动化系统。

## 特性

- 🚀 Monorepo 架构 - 使用 Rush + pnpm 管理多包
- 📦 独立发布 - 所有子包可单独发布和使用
- 🛠️ 完整构建链 - 支持 TypeScript、多种模块格式
- 📚 自动文档 - Docusaurus 文档站点

## 核心工具

| 包 | 描述 |
|---|---|
| [@jelper/builder](./packages/builder) | CLI 构建工具，支持 build/serve/test 命令 |
| [@jelper/css](./packages/css) | CSS 工具集 |
| [@jelper/enum](./packages/enum) | 枚举工具库，类型安全 |
| [@jelper/di](./packages/di) | 依赖注入工具 |
| [@jelper/notify](./packages/notify) | 通知组件库 |

## React 相关

| 包 | 描述 |
|---|---|
| [@jelper/component](./packages/component) | React 组件库，基于 styled-components |
| [@jelper/hooks](./packages/hooks) | React Hooks 工具集 |
| [@jelper/context-composer](./packages/context-composer) | React Context 组合工具 |

## 业务工具

| 包 | 描述 |
|---|---|
| [@jelper/store](./packages/store) | 轻量级状态管理 |
| [@jelper/handler](./packages/handler) | 事件处理器工具集 |
| [@jelper/promise](./packages/promise) | Promise 辅助工具 |

## 快速开始

```bash
# 安装 Rush（如果尚未安装）
npm install -g @microsoft/rush@5.164.0 pnpm@10.26.0

# 安装依赖
rush update

# 构建所有包
rush build
```

## 发布

```bash
rush publish -p --include-all -n ${token}
```

## 项目结构

```
jelper/
├── common/                 # 公共配置和脚本
├── packages/               # 所有子包
│   ├── builder/           # 构建工具
│   ├── component/         # React 组件
│   ├── context-composer/  # Context 组合器
│   ├── css/               # CSS 工具
│   ├── di/                # 依赖注入
│   ├── enum/              # 枚举工具
│   ├── handler/           # 处理器工具
│   ├── hooks/             # React Hooks
│   ├── notify/            # 通知组件
│   ├── promise/           # Promise 工具
│   └── store/             # 状态管理
├── website/               # Docusaurus 文档
└── rush.json              # Rush 配置
```

## 技术栈

- **包管理**: Rush + pnpm
- **构建**: Webpack + Babel + TypeScript
- **测试**: Jest + Cypress
- **文档**: Docusaurus

## License

ISC - apathyjade@outlook.com
