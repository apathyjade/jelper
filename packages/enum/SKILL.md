# @jelper/enum — 枚举工具库

## 简介
类型安全的枚举管理器，提供基于数组的枚举定义、按 key/value 查找、label 提取等功能。

## 安装
```bash
npm install @jelper/enum
```

## API

### `EnumHelper<T>` 类

```ts
import { EnumHelper } from '@jelper/enum';
```

#### `constructor(list: T[])`
创建枚举实例。

```ts
const statusEnum = new EnumHelper([
  { label: '待审核', key: 'pending', value: 0 },
  { label: '已通过', key: 'approved', value: 1 },
  { label: '已拒绝', key: 'rejected', value: 2 },
]);
```

#### `.get(key, value?)`
查找枚举项。只传 key 时按 `key` 字段查找；传 value 时按指定字段查找。

```ts
statusEnum.get('pending');
// => { label: '待审核', key: 'pending', value: 0 }

statusEnum.get('value', 1);
// => { label: '已通过', key: 'approved', value: 1 }
```

#### `.getLabel(key)`
获取枚举项的 label。

```ts
statusEnum.getLabel('approved'); // => '已通过'
```

#### `.getValue(key)`
获取枚举项的 value。

```ts
statusEnum.getValue('rejected'); // => 2
```

#### `.getData()`
获取所有枚举项数组。

```ts
statusEnum.getData();
// => [{ label: '待审核', key: 'pending', value: 0 }, ...]
```

#### `.valueOf()`
同 `getData()`。

#### `EnumHelper.build(data, expand?)`
静态工厂方法，创建实例并可合并扩展方法：

```ts
const myEnum = EnumHelper.build(
  [{ label: '是', key: 'yes' }, { label: '否', key: 'no' }],
  { isYes: (key: string) => key === 'yes' }
);
myEnum.isYes('yes'); // => true
```

### 类型 `EnumItem<T>`
```ts
type EnumItem<T = Record<string, any>> = {
  label: string;
  key: string;
  value?: any;
} & T;
```

## 完整示例
```tsx
import { EnumHelper } from '@jelper/enum';

const genderEnum = new EnumHelper([
  { label: '男', key: 'male', value: 'M' },
  { label: '女', key: 'female', value: 'F' },
]);

// Select 组件使用
<Select options={genderEnum.getData().map(item => ({
  label: item.label,
  value: item.key,
}))} />
```
