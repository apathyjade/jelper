# @jelper/handler — 事件处理器工具集

## 简介
提供 `SingleHandler`（单一回调）和 `MultipleHandler`（多回调）两种模式，用于解耦模块间的事件调用。

## 安装
```bash
npm install @jelper/handler
```

## API

### `MultipleHandler<T>` — 多回调处理器
支持注册多个回调，调用时并行执行所有回调。

```ts
import { MultipleHandler } from '@jelper/handler';

type Cb = (data: { id: number }) => Promise<void>;
const handler = new MultipleHandler<Cb>();

// 注册回调
const unsub1 = handler.on(async (data) => console.log('handler 1', data));
const unsub2 = handler.on(async (data) => console.log('handler 2', data));

// 调用所有回调（Promise.all 并行执行）
await handler.call({ id: 1 });

// 获取回调数量
console.log(handler.size); // => 2

// 移除特定回调
unsub1();
// 或移除所有
handler.off(); // 无参 = 清除全部
```

### `MultipleHandler.call(data)` — 并行执行
返回 `Promise.all(...)` 结果。

### `MultipleHandler.callWithRace(data)` — 竞速执行
返回 `Promise.race(...)` 结果，第一个 resolve/reject 的结果。

### `SingleHandler<T>` — 单一回调处理器
只允许注册一个回调，重复注册会警告。

```ts
import { SingleHandler } from '@jelper/handler';

const handler = new SingleHandler<(data: string) => Promise<string>>();

handler.on(async (msg) => `hello ${msg}`);

handler.call('world').then(res => console.log(res)); // => 'hello world'

handler.off(); // 移除回调
handler.call('test').catch(err => console.error(err.message)); // => 'handler is not exist'
```

### 静态转换
```ts
// MultipleHandler → SingleHandler
const single = MultipleHandler.build<(data: number) => Promise<void>>();

// SingleHandler → MultipleHandler
const multi = SingleHandler.build<(data: number) => Promise<void>>();
```

## 完整示例
```ts
import { SingleHandler, MultipleHandler } from '@jelper/handler';

// 模块 A：定义 handler
export const onUserLogin = new MultipleHandler<(user: { id: string }) => Promise<void>>();

// 模块 B：监听事件
onUserLogin.on(async (user) => { /* 更新状态 */ });
onUserLogin.on(async (user) => { /* 发送日志 */ });

// 模块 C：触发事件
await onUserLogin.call({ id: '123' });
```
