
import { useEnumHelper, EnumHelper} from '../src/index.ts';

const testEnumHelper = useEnumHelper([
  {
    label: '测试1',
    key: 'test1',
    value: false
  }
], {
  getItemByPropsValue() {
    (this as EnumHelper)
  }
})
