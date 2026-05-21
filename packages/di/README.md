# @jelper/di

简易依赖注入容器，基于 Map 存储。支持 `useValue` 和 `useFactory` 两种提供方式，用于模块间解耦。

## 安装

```bash
npm install @jelper/di
```

## 导入

```ts
import { setProvide, getProvide, removeProvide, reletion, removeRelation } from '@jelper/di';
```

## API

### setProvide(provider)

注册依赖提供者。相同 type 不可重复注册（重复会抛异常）。

```ts
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

### getProvide(require, ...args)

获取依赖实例。先查关联关系，再按 type 查找。

```ts
const api = getProvide<ApiClient>({ token: 'api-client', type: 'ApiClient' });
const logger = getProvide<Logger>({ token: 'logger', type: 'Logger' }, 'debug');
```

### removeProvide(type)

移除 provider。

```ts
removeProvide('ApiClient');
```

### reletion(require, provider)

建立关联关系。

```ts
reletion(
  { token: 'service', type: 'Service' },
  { token: 'api', type: 'ApiClient' },
);
```

### removeRelation(require)

移除关联。

```ts
removeRelation({ token: 'service', type: 'Service' });
```

## 类型

```ts
type Token = string | symbol;

interface Provider<T = any> {
  token: Token;
  type: string;
  useValue?: T;
  useFactory?: (...args: any[]) => T;
}

interface Require {
  token: Token;
  type: string;
}
```

## 完整示例

```ts
import { setProvide, getProvide, reletion } from '@jelper/di';

setProvide({
  token: 'config',
  type: 'AppConfig',
  useValue: { apiUrl: 'https://api.example.com' },
});

setProvide({
  token: 'http',
  type: 'HttpClient',
  useFactory: (config) => new HttpClient(config),
});

reletion(
  { token: 'http', type: 'HttpClient' },
  { token: 'config', type: 'AppConfig' },
);

const http = getProvide<HttpClient>({ token: 'http', type: 'HttpClient' });
await http.get('/users');
```
