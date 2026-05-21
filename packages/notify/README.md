# @jelper/notify

轻量级发布订阅工具，用于跨模块通信。提供基础通知器和自动主题变化监听。

## 安装

```bash
npm install @jelper/notify
```

## 导入

```ts
import buildNotify, { buildThemeNotify } from '@jelper/notify';
```

## API

### buildNotify()

创建通用通知器。

```ts
const notify = buildNotify<string>();

// 订阅（返回取消函数）
const unsub = notify.on((data) => console.log('received:', data));

// 一次性订阅
notify.once((data) => console.log('仅触发一次:', data));

// 发布
notify.notify('hello');

// 取消订阅 / 销毁
unsub();
notify.destroy();
```

**返回 Notify\<T\> 接口**：

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `on(cb)` | `() => void` | 订阅，返回取消函数 |
| `once(cb)` | `() => void` | 一次性订阅 |
| `notify(data)` | `void` | 发布通知 |
| `destroy()` | `void` | 清除所有订阅 |

### buildThemeNotify()

监听系统主题变化（`prefers-color-scheme`）。

```tsx
const themeNotify = buildThemeNotify();

themeNotify.on((theme) => {
  document.body.classList.toggle('dark', theme === 'dark');
});

// 清理
themeNotify.destroy();
```

返回 `Notify<'light' | 'dark'>`，自动兼容 Safari 旧版 API。

## 完整示例

```ts
// store.ts
import { buildNotify } from '@jelper/notify';
export const onUserChange = buildNotify<{ id: string; name: string }>();

// header.tsx
import { onUserChange } from './store';
useEffect(() => onUserChange.on((user) => setUserName(user.name)), []);

// login.tsx
import { onUserChange } from './store';
onUserChange.notify({ id: '1', name: 'Alice' });
```
