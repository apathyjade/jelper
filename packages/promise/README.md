# @jelper/promise

Promise 辅助工具集。统一转 Promise、串行执行、外部控制 Promise、请求缓存去重。

## 安装

```bash
npm install @jelper/promise
```

## 导入

```ts
import { toPromise, callLikeSerial, buildPromiseHandler, buildCacheAsyncFn } from '@jelper/promise';
```

## API

### toPromise(data)

将任意值统一为 Promise。

```ts
await toPromise(42);              // → Promise.resolve(42)
await toPromise(() => 'hello');   // → 'hello'（函数自动执行）
await toPromise(Promise.resolve(1)); // → 1
await toPromise(false);           // → Promise.reject()
```

### callLikeSerial(cbs)

串行执行回调数组。

```ts
await callLikeSerial([
  () => Promise.resolve('step 1'),
  () => Promise.resolve('step 2'),
]);
```

### buildPromiseHandler()

创建外部可控制的 Promise。返回 `[promise, resolve, reject]`。

```ts
const [promise, resolve, reject] = buildPromiseHandler<string>();
setTimeout(() => resolve('done!'), 1000);
const result = await promise; // 'done!'
```

### buildCacheAsyncFn(fn)

缓存版异步函数，并发去重。

```ts
const fetchUser = buildCacheAsyncFn(async (id: string) => {
  const res = await fetch(`/api/user/${id}`);
  return res.json();
});

// 同时调用 3 次，只发 1 次请求
const [a, b, c] = await Promise.all([
  fetchUser('1'), fetchUser('1'), fetchUser('1'),
]);
```
