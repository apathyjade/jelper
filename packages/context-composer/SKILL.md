# @jelper/context-composer — React Context 组合工具

## 简介
简化 React Context 的创建和组合，解决多 Context 嵌套问题。提供 Context 创建器 + 多 Context 合并器。

## 安装
```bash
npm install @jelper/context-composer
```

## API

### `createCtxComposer(useCfgHook, opts?)`
创建一个 Context 组合器，返回 `forwardComposer`、`useComposerCtx`、`buildHooks`。

```tsx
import { createCtxComposer } from '@jelper/context-composer';

// 1. 定义 Context 配置 hook
const useThemeConfig = (props: { theme: 'light' | 'dark' }) => ({
  theme: props.theme,
  colors: props.theme === 'dark' ? { bg: '#000' } : { bg: '#fff' },
});

// 2. 创建组合器
const { forwardComposer, useComposerCtx, buildHooks } = createCtxComposer(useThemeConfig);

// 3. 包装组件
const ThemedApp = forwardComposer((props: { theme: 'light' | 'dark' }) => {
  const ctx = useComposerCtx(); // 获取 Context 值
  return <div style={{ background: ctx.colors.bg }}>内容</div>;
});

// 4. 使用
<ThemedApp theme="dark" />
```

**参数**:
| 参数 | 类型 | 说明 |
|------|------|------|
| `useCfgHook` | `(props: P) => T` | 根据 props 生成 Context 值的 hook |
| `opts.builder` | `(props, Com) => JSX.Element` | 可选，自定义 Provider 外层包装 |

**返回值**:
| 方法 | 说明 |
|------|------|
| `forwardComposer(Com, propsAreEqual?)` | 包装组件，自动注入 Context Provider |
| `useComposerCtx()` | 获取 Context 值 |
| `buildHooks(cb)` | 基于 Context 创建自定义 hooks |

### `mergeComposer(list)`
合并多个 Composer 为链式 Context 嵌套，避免多层 Provider 嵌套：

```tsx
import { createCtxComposer, mergeComposer } from '@jelper/context-composer';

const { forwardComposer: withTheme } = createCtxComposer(useThemeConfig);
const { forwardComposer: withAuth } = createCtxComposer(useAuthConfig);

const ComposedApp = mergeComposer([withTheme, withAuth])(App);
// 等价于: <ThemeProvider><AuthProvider><App /></AuthProvider></ThemeProvider>
```

## 依赖要求
- React >=18.0.0
