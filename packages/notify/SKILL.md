# @jelper/notify — 通知器（发布订阅）

## 简介
轻量级发布订阅工具，用于跨模块通信。提供基础通知器和自动主题变化通知。

## 安装
```bash
npm install @jelper/notify
```

## API

### `buildNotify<T>()`
创建通用通知器实例。

```ts
import { buildNotify } from '@jelper/notify';
// 或
import buildNotify from '@jelper/notify';
```

```ts
const notify = buildNotify<string>();

// 订阅（返回取消订阅函数）
const unsubscribe = notify.on((data) => {
  console.log('received:', data);
});

// 一次性订阅
notify.once((data) => {
  console.log('仅触发一次:', data);
});

// 发布通知
notify.notify('hello world');

// 取消订阅
unsubscribe();

// 销毁所有订阅
notify.destroy();
```

**Notify<T> 接口**：
| 方法 | 说明 |
|------|------|
| `on(callback) => unsubscribe` | 订阅，返回取消函数 |
| `once(callback) => unsubscribe` | 一次性订阅 |
| `notify(data)` | 发布通知 |
| `destroy()` | 清除所有订阅 |

### `buildThemeNotify()`
创建自动检测系统主题的通知器。监听 `prefers-color-scheme` 媒体查询。

```ts
import { buildThemeNotify } from '@jelper/notify';

const themeNotify = buildThemeNotify();

themeNotify.on((theme) => {
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

// 组件卸载时销毁
themeNotify.destroy();
```

**返回类型**: `Notify<'light' | 'dark'>` — 比基础版多兼容了 CSS 媒体查询的旧版 Safari `addListener` API。

## 完整示例
```ts
// store.ts - 跨模块状态同步
import { buildNotify } from '@jelper/notify';

export const onUserChange = buildNotify<{ id: string; name: string }>();

// header.tsx - 订阅
import { onUserChange } from './store';
useEffect(() => onUserChange.on((user) => setUser(user.name)), []);

// login.tsx - 发布
import { onUserChange } from './store';
onUserChange.notify({ id: '1', name: 'Alice' });
```
