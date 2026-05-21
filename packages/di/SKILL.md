# @jelper/di — 依赖注入工具

## 简介
简易的依赖注入容器，基于 Map 存储，支持 `useValue` 和 `useFactory` 两种提供方式。适用于跨模块解耦。

## 安装
```bash
npm install @jelper/di
```

## API

### 类型定义
```ts
type Token = string | symbol;

interface Provider<T = any> {
  token: Token;        // 唯一标识
  type: string;        // 类型名称
  useValue?: T;        // 直接提供值
  useFactory?: (...arg: any[]) => T;  // 工厂函数
}

interface Require {
  token: Token;
  type: string;
}
```

### `setProvide(provider)`
注册一个 Provider。相同 type 不允许重复注册。

```ts
import { setProvide } from '@jelper/di';

setProvide({
  token: 'api-client',
  type: 'ApiClient',
  useValue: new ApiClient('https://api.example.com'),
});

setProvide({
  token: 'logger',
  type: 'Logger',
  useFactory: (level: string) => new Logger(level),
});
```

### `getProvide(require, ...args)`
获取依赖实例。先查找 relation，再按 type 查找。

```ts
import { getProvide } from '@jelper/di';

const api = getProvide({ token: 'api-client', type: 'ApiClient' });
const logger = getProvide({ token: 'logger', type: 'Logger' }, 'debug');
```

### `removeProvide(type)`
移除已注册的 Provider。

```ts
removeProvide('ApiClient');
```

### `reletion(require, provider)`
建立关联关系（将 require 映射到特定 provider）。

```ts
reletion(
  { token: 'service-a', type: 'ServiceA' },
  { token: 'api-client', type: 'ApiClient' }
);
```

### `removeRelation(require)`
移除关联关系。

## 完整示例
```ts
// 注册
setProvide({ token: 'config', type: 'Config', useValue: { apiUrl: '...' } });
setProvide({ token: 'http', type: 'HttpClient', useFactory: (cfg) => new HttpClient(cfg) });
reletion({ token: 'http', type: 'HttpClient' }, { token: 'config', type: 'Config' });

// 使用
const http = getProvide<HttpClient>({ token: 'http', type: 'HttpClient' });
```
