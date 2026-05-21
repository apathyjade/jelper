# @jelper/hooks

19 个轻量级 React Hooks，覆盖状态管理、生命周期、防抖节流、异步请求等场景。

## 安装

```bash
npm install @jelper/hooks
```

## 导入

```ts
import { useBoolState, useDebounce, useAsync, useSafeRunner } from '@jelper/hooks';
```

## 特殊 State

### useBoolState(initial)

布尔状态切换。返回 `[value, setter]`。

```tsx
const [visible, toggle] = useBoolState(false);
toggle();          // → true（翻转）
toggle(true);      // → true（设值）
toggle(v => !v);   // → false（函数）
```

### useValue(value, onChange?, opts?)

受控值 hook，双向同步外部 value 与内部 state。

```tsx
const [name, setName] = useValue('initial', (newVal) => console.log(newVal));
```

## 实时引用（解决闭包陷阱）

### useRtRef(value)

保持 ref 始终指向最新值。

```tsx
const cbRef = useRtRef(onClick);
useEffect(() => { setInterval(() => cbRef.current(), 1000); }, []);
```

### useRtCb(callback)

返回稳定引用的 callback，内部始终调用最新版本。

```tsx
const handleClick = useRtCb(() => console.log(count));
```

## 特殊 Effect

### useUpdateEff(cb, deps)

类似 `useEffect`，跳过首次执行。

```tsx
useUpdateEff(() => { console.log('count changed:', count); }, [count]);
```

## 生命周期

| Hook | 说明 |
|------|------|
| `useIsMounted()` | `() => boolean` 判断是否挂载 |
| `useIsUnmount()` | `() => boolean` 判断是否已卸载 |
| `useCreate(cb)` | 挂载时立即执行（比 useEffect 更早） |
| `useMount(cb)` | 挂载时执行 |
| `useUnmount(cb)` | 卸载时执行 |

## 防抖节流

```tsx
const debouncedSearch = useDebounce((q: string) => fetch(q), 300);
const throttledLog = useThrottle(() => console.log('scroll'), 200);
```

## 异步

### useAsync(asyncFn, opts?)

```tsx
const [data, { run, refresh, cancel, loading, error }] = useAsync(
  async (params, { signal }) => {
    const res = await fetch(url, { signal });
    return res.json();
  },
  { immediate: true }
);

run({ page: 1 });  // 触发
refresh();          // 重试
cancel();           // 中止
```

### useSafeRunner()

返回安全执行函数，组件卸载后不执行回调。

```tsx
const safeRun = useSafeRunner();
safeRun(() => setState(value));
```

### useIgnoreAbortErrCb(cb)

包装回调，忽略 AbortError。

## 浏览器 API

| Hook | 说明 |
|------|------|
| `useTimeout(cb, ms)` | setTimeout 封装，自动清理 |
| `useTimeoutHandler()` | 手动 `[bindTimer, clearTimer]` |
| `useInterval(cb, ms)` | setInterval 封装，自动清理 |
| `useIntervalHandler()` | 手动 `[bindTimer, clearTimer]` |
| `useResizeObserver(cb, ref)` | ResizeObserver 封装 |
| `useResizeObserverHandler()` | 手动 `[observe, unobserve]` |

## 依赖

- React >=18.0.0
- lodash >=4.17.21（useDebounce/useThrottle）


