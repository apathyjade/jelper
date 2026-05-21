# @jelper/context-composer

React Context 组合工具，简化 Context 创建和嵌套。提供 Context 组合器 + 多 Context 合并器。

## 安装

```bash
npm install @jelper/context-composer
```

## 导入

```tsx
import { createCtxComposer, mergeComposer } from '@jelper/context-composer';
```

## API

### createCtxComposer(useCfgHook, opts?)

创建一个 Context 组合器。

```tsx
// 1. 定义 Context hook
const useThemeCfg = (props: { theme: 'light' | 'dark' }) => ({
  theme: props.theme,
  colors: props.theme === 'dark' ? { bg: '#000' } : { bg: '#fff' },
});

// 2. 创建组合器
const { forwardComposer, useComposerCtx, buildHooks } = createCtxComposer(useThemeCfg);

// 3. 包装组件
const ThemedApp = forwardComposer((props) => {
  const ctx = useComposerCtx();
  return <div style={{ background: ctx.colors.bg }}>{props.children}</div>;
});

// 4. 使用
<ThemedApp theme="dark">content</ThemedApp>
```

**参数**：

| 参数 | 类型 | 说明 |
|------|------|------|
| `useCfgHook` | `(props: P) => T` | 根据 props 生成 Context 值的 hook |
| `opts.builder` | `(props, Com) => JSX.Element` | 可选，自定义 Provider 外层包装 |

**返回值**：

| 方法 | 说明 |
|------|------|
| `forwardComposer(Com, propsAreEqual?)` | 包装组件，自动注入 Context Provider |
| `useComposerCtx()` | 获取 Context 值 |
| `buildHooks(cb)` | 基于 Context 创建自定义 hooks |

### mergeComposer(list)

合并多个 Composer，避免多层 Provider 嵌套。

```tsx
const { forwardComposer: withTheme } = createCtxComposer(useThemeCfg);
const { forwardComposer: withAuth } = createCtxComposer(useAuthCfg);

const App = mergeComposer([withTheme, withAuth])(MainComponent);
// 等价于：
// <ThemeProvider><AuthProvider><MainComponent /></AuthProvider></ThemeProvider>
```

## 依赖

- React >=18.0.0
