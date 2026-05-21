# @jelper/hooks — React Hooks 工具集

## 简介
19 个轻量级 React Hooks，覆盖状态管理、生命周期、防抖节流、异步请求等场景。无外部依赖。

## 安装
```bash
npm install @jelper/hooks
```

## Hooks 列表

### 特殊 State

#### `useBoolState(initial)`
布尔状态切换 hook。返回 `[value, toggle]`，toggle 支持翻转/设值/函数：

```tsx
import { useBoolState } from '@jelper/hooks';

const [visible, setVisible] = useBoolState(false);
setVisible();       // → true (翻转)
setVisible(false);  // → false (设值)
setVisible(v => !v);// → true (函数)
```

#### `useValue(value, onChange?, opts?)`
受控值 hook，双向同步外部 value 与内部 state：

```tsx
import { useValue } from '@jelper/hooks';

const [name, setName] = useValue('initial', (newVal) => console.log('changed', newVal));
```

#### `useOption(defOpt, opts?)`
选项合并 hook。

### 实时引用

#### `useRtRef(value)`
保持 ref 始终指向最新值（解决闭包陷阱）：

```tsx
import { useRtRef } from '@jelper/hooks';

function App({ onClick }) {
  const cbRef = useRtRef(onClick);
  useEffect(() => {
    setInterval(() => cbRef.current(), 1000); // 始终获取最新 onClick
  }, []);
}
```

#### `useRtCb(callback)`
返回稳定引用的 callback，内部始终调用最新版本：

```tsx
import { useRtCb } from '@jelper/hooks';

const handleClick = useRtCb(() => console.log(count));
// handleClick 引用不变，但内部始终读取最新 count
```

### 特殊 Effect

#### `useUpdateEff(cb, deps)`
类似 `useEffect`，但跳过首次执行（只在依赖更新时触发）：

```tsx
import { useUpdateEff } from '@jelper/hooks';

const [count, setCount] = useState(0);
useUpdateEff(() => { console.log('count changed:', count); }, [count]);
// 首次不执行，count 变化后才执行
```

### 生命周期

| Hook | 说明 |
|------|------|
| `useIsMounted()` | 返回 `() => boolean`，判断是否挂载中 |
| `useIsUnmount()` | 返回 `() => boolean`，判断是否已卸载 |
| `useCreate(cb)` | 组件挂载时执行一次（比 `useEffect(fn, [])` 更早） |
| `useMount(cb)` | 挂载时执行 |
| `useUnmount(cb)` | 卸载时执行 |

### 防抖节流

```tsx
import { useDebounce, useThrottle } from '@jelper/hooks';

const debouncedSearch = useDebounce((query: string) => fetch(query), 300);
const throttledLog = useThrottle(() => console.log('scroll'), 200);
```

### 异步

#### `useSafeRunner()`
返回安全执行函数，组件已卸载时不执行回调：

```tsx
import { useSafeRunner, useAsync } from '@jelper/hooks';

const [data, { run, refresh, cancel, loading, error }] = useAsync(
  async (params, { signal }) => {
    const res = await fetch(url, { signal });
    return res.json();
  },
  { immediate: true, format: (data) => data.result }
);

run({ page: 1 });  // 手动触发
refresh();         // 用上次参数重新请求
cancel();          // 中止当前请求
```

#### `useIgnoreAbortErrCb(cb)`
包装回调，忽略 AbortError 异常。

### 浏览器 API

| Hook | 说明 |
|------|------|
| `useTimeout(cb, ms, ...args)` | setTimeout 封装，自动清理 |
| `useTimeoutHandler()` | 返回 `[bindTimer, clearTimer]` 手动控制 |
| `useInterval(cb, ms, ...args)` | setInterval 封装，自动清理 |
| `useIntervalHandler()` | 返回 `[bindTimer, clearTimer]` 手动控制 |
| `useResizeObserver(cb, ref)` | ResizeObserver 封装 |
| `useResizeObserverHandler()` | 返回 `[observe, unobserve]` 手动控制 |

## 依赖要求
- React >=18.0.0
- lodash >=4.17.21（useDebounce/useThrottle 使用）
