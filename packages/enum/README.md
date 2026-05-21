# @jelper/enum

类型安全的枚举管理器。基于数组定义，提供按 key/value 查找、label 提取、方法扩展等功能。

## 安装

```bash
npm install @jelper/enum
```

## 导入

```ts
import { EnumHelper } from '@jelper/enum';
```

## API

### EnumHelper 类

#### constructor(list)

```ts
const statusEnum = new EnumHelper([
  { label: '待审核', key: 'pending', value: 0 },
  { label: '已通过', key: 'approved', value: 1 },
  { label: '已拒绝', key: 'rejected', value: 2 },
]);
```

#### .get(key, value?)

按 key 或指定字段查找枚举项。

```ts
statusEnum.get('pending');
// => { label: '待审核', key: 'pending', value: 0 }

statusEnum.get('value', 1);
// => { label: '已通过', key: 'approved', value: 1 }
```

#### .getLabel(key)

获取 label。

```ts
statusEnum.getLabel('approved'); // => '已通过'
```

#### .getValue(key)

获取 value。

```ts
statusEnum.getValue('rejected'); // => 2
```

#### .getData()

获取所有枚举项。

```ts
statusEnum.getData();
// => [{ label: '待审核', key: 'pending', value: 0 }, ...]
```

#### .valueOf()

同 getData()。

#### EnumHelper.build(data, expand?)

静态工厂，创建实例并合并扩展方法。

```ts
const myEnum = EnumHelper.build(
  [{ label: '是', key: 'yes' }, { label: '否', key: 'no' }],
  { isYes: (key: string) => key === 'yes' }
);
myEnum.isYes('yes'); // => true
```

## 类型

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

<Select options={genderEnum.getData().map(({ label, key }) => ({
  label, value: key,
}))} />;
```
