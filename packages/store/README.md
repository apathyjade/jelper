# @jelper/store

轻量级状态管理工具。基于 Web Storage API，支持三种存储介质（localStorage / sessionStorage / memory），支持按页面路径隔离和过期时间。

## 安装

```bash
npm install @jelper/store
```

## 导入

```ts
import { setValue, getValue, remove, clear, StorageType, StoreType } from '@jelper/store';
```

## API

### 枚举

```ts
enum StorageType { memory = 'memory', session = 'session', local = 'local' }
enum StoreType { global = 'global', page = 'page' }
```

### setValue(key, value, options?)

存储数据。

```ts
// 默认：localStorage + page 作用域
setValue('theme', 'dark', {});

// sessionStorage + 全局 + 1小时过期
setValue('token', 'abc123', {
  cache: StorageType.session,
  type: StoreType.global,
  expires: 3600000,
});
```

### getValue(key, options?)

读取数据。

```ts
const theme = getValue<string>('theme', {});       // => 'dark'
const token = getValue('token', { type: StoreType.global }); // => 'abc123'
```

### remove(key, options?)

删除数据。

```ts
remove('theme', {});
```

### clear(options?)

清除指定存储介质的所有数据。

```ts
clear({ cache: StorageType.memory }); // 清空内存缓存
clear({});                            // 清空 localStorage
```

### Options

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `cache` | `StorageType` | `local` | 存储介质 |
| `type` | `StoreType` | `page` | 作用域 |
| `expires` | `number` | — | 过期时间（毫秒），不设则永不过期 |

### Key 规则

- **page 模式**：`jelper_p_{pathname}_{key}` — 按页面路径自动隔离
- **global 模式**：`jelper_g_{key}` — 全局共享

### 内存存储

内置内存存储（`StorageType.memory`），刷新页面即清除，适合临时数据。

## 完整示例

```ts
import { setValue, getValue, remove, StorageType, StoreType } from '@jelper/store';

// 用户偏好（localStorage + 页面隔离 + 1天过期）
setValue('sidebar-collapsed', true, { expires: 86400000 });

// 会话令牌（sessionStorage + 全局）
setValue('auth-token', token, {
  cache: StorageType.session,
  type: StoreType.global,
});

// 临时缓存（内存，页面刷新即消失）
setValue('search-results', results, { cache: StorageType.memory });

// 读取
const collapsed = getValue<boolean>('sidebar-collapsed', {});
```
