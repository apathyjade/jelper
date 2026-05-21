# @jelper/store — 轻量级状态管理

## 简介
基于 Web Storage API 的轻量级存储工具，支持 `localStorage`、`sessionStorage`、`memory` 三种存储方式，支持过期时间。

## 安装
```bash
npm install @jelper/store
```

## API

### 枚举

| 类型 | 值 | 说明 |
|------|-----|------|
| `StorageType` | `local` / `session` / `memory` | 存储介质 |
| `StoreType` | `page` / `global` | 作用域（page 根据 pathname 隔离） |

### `setValue(key, value, options?)`
存储数据：

```ts
import { setValue, StorageType, StoreType } from '@jelper/store';

// 默认：localStorage + page 作用域
setValue('theme', 'dark', {});

// 指定存储方式 + 全局作用域 + 过期时间
setValue('token', 'abc123', {
  cache: StorageType.session,
  type: StoreType.global,
  expires: 3600000, // 1小时后过期
});
```

### `getValue(key, options?)`
读取数据：

```ts
import { getValue } from '@jelper/store';

const theme = getValue<string>('theme', {}); // => 'dark'
const token = getValue('token', { type: StoreType.global }); // => 'abc123'
```

### `remove(key, options?)`
删除数据：

```ts
remove('theme', {});
remove('token', { type: StoreType.global });
```

### `clear(options?)`
清除当前存储介质的所有数据：

```ts
clear({ cache: StorageType.memory }); // 清除内存存储
clear({}); // 清除 localStorage
```

### Options

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `cache` | `StorageType` | `StorageType.local` | 存储方式 |
| `type` | `StoreType` | `StoreType.page` | 作用域 |
| `expires` | `number` | — | 过期时间(ms)，不设则永不过期 |

### key 规则
- **page 模式**: `jelper_p_{pathname}_{key}`（按页面路径隔离）
- **global 模式**: `jelper_g_{key}`（全局共享）

## 完整示例
```ts
import { setValue, getValue, remove, StorageType, StoreType } from '@jelper/store';

// 用户偏好设置（localStorage + 页面隔离）
setValue('sidebar-collapsed', true, { expires: 86400000 });

// 会话令牌（sessionStorage + 全局）
setValue('auth-token', token, { cache: StorageType.session, type: StoreType.global });

// 临时缓存（内存）
setValue('search-result', results, { cache: StorageType.memory });

// 页面级读取
const collapsed = getValue<boolean>('sidebar-collapsed', {});
```
