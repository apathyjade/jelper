# @jelper/handler

事件处理器工具集。提供 `SingleHandler`（单回调）和 `MultipleHandler`（多回调）两种模式，用于模块间解耦。

## 安装

```bash
npm install @jelper/handler
```

## 导入

```ts
import { SingleHandler, MultipleHandler } from '@jelper/handler';
```

## API

### MultipleHandler — 多回调处理器

支持注册多个回调，并行执行。

```ts
type Cb = (data: { id: number }) => Promise<void>;
const handler = new MultipleHandler<Cb>();

const unsub1 = handler.on(async (data) => console.log('handler 1', data));
handler.on(async (data) => console.log('handler 2', data));

console.log(handler.size); // => 2

await handler.call({ id: 1 }); // 并行执行

unsub1();        // 移除特定回调
handler.off();   // 清除所有
```

| 方法 | 说明 |
|------|------|
| `on(cb)` | 注册回调，返回取消函数 |
| `off(cb?)` | 移除指定回调，无参则清除所有 |
| `call(data)` | 并行执行，返回 `Promise.all` |
| `callWithRace(data)` | 竞速执行，返回 `Promise.race` |
| `size` | 当前回调数量 |

### SingleHandler — 单回调处理器

只允许注册一个回调，重复注册会警告。

```ts
const handler = new SingleHandler<(msg: string) => Promise<string>>();

handler.on(async (msg) => `hello ${msg}`);
await handler.call('world'); // => 'hello world'

handler.off();
await handler.call('test').catch(err => console.error(err.message));
// => 'handler is not exist'
```

### 静态转换

```ts
const single = MultipleHandler.build<(data: number) => Promise<void>>();
const multi = SingleHandler.build<(data: number) => Promise<void>>();
```

## 完整示例

```ts
import { MultipleHandler } from '@jelper/handler';

export const onUserLogin = new MultipleHandler<
  (user: { id: string; name: string }) => Promise<void>
>();

// 模块 A：监听
onUserLogin.on(async (user) => { /* 更新状态 */ });
// 模块 B：触发
await onUserLogin.call({ id: '1', name: 'Alice' });
```
