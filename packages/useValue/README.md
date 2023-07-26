# @jelper/useValue
reack受控组件hook, useValue受控传入value

## 使用

```typescript
import useValue from '@jelper/use-value'

function Demo() {
  const [outValue, setOutValue] = useState('')
  const [value, setValue] = useValue(outValue)
  return (
    <>
      <input value={value} onInput={(ev) => setValue(ev.target.value)} />
      <button onClick={() => setOutValue('')} >清空</button>
    </>
  )
}
```

### API

```typescript
// 配置
interface Options<T> {
  // 判断 传入value是否变更，默认 ===
  isEqual?: (a:T, b: T) => boolean
}
type SetValue<T> = (v: T|((oldVal: T) => T)) => void

type UseValue<T = any> = (val: T, opts: Options<T>) => [T, SetValue<T>];
```






