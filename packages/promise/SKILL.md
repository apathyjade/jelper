# @jelper/promise — Promise 辅助工具集

## 简介
提供 Promise 工具函数：统一转 Promise、串行执行、外部控制 Promise、请求缓存。

## 安装
```bash
npm install @jelper/promise
```

## API

### `toPromise<T>(data)`
将任意值统一为 Promise：

```ts
import { toPromise } from '@jelper/promise';

await toPromise(42);           // → Promise.resolve(42)
await toPromise(() => 42);     // → Promise.resolve(42)（函数自动执行）
await toPromise(Promise.resolve(42)); // → 42
await toPromise(false);        // → Promise.reject()（false 特殊处理）
```

| 输入 | 行为 |
|------|------|
| 函数 | 递归执行 `toPromise(data())` |
| Promise | 直接返回 |
| `false` | 返回 `Promise.reject()` |
| 其他值 | 返回 `Promise.resolve(data)` |

### `callLikeSerial(cbs)`
串行执行回调数组，每个 cb 返回 Promise，按顺序执行：

```ts
import { callLikeSerial } from '@jelper/promise';

await callLikeSerial([
  () => Promise.resolve('step 1'),
  () => Promise.resolve('step 2'),
]);
// 等价于: Promise.resolve().then(() => 'step 1').then(() => 'step 2')
```

### `buildPromiseHandler<T>()`
创建一个外部可控制的 Promise，返回 `[promise, resolve, reject]`：

```ts
import { buildPromiseHandler } from '@jelper/promise';

const [promise, resolve, reject] = buildPromiseHandler<string>();

// 在其他地方控制
setTimeout(() => resolve('done!'), 1000);

const result = await promise; // 1秒后得到 'done!'
```

### `buildCacheAsyncFn<T, R>(fn)`
创建缓存版异步函数，并发请求去重：

```ts
import { buildCacheAsyncFn } from '@jelper/promise';

const fetchUser = buildCacheAsyncFn(async (id: string) => {
  const res = await fetch(`/api/user/${id}`);
  return res.json();
});

// 并发调用 3 次，实际只会发起 1 次请求
const [a, b, c] = await Promise.all([
  fetchUser('1'),
  fetchUser('1'),
  fetchUser('1'),
]);
// 第二次及后续调用直接返回第一次的结果
```
