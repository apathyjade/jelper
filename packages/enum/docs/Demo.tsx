
import React from 'react';
import EnumHelper from '@jelper/enum';

// 拓展
const enumHelperSuper = EnumHelper.build([
  { label: 'A', key: 'a', value: 1 },
  { label: 'B', key: 'b', value: 2 },
  { label: 'C', key: 'c', value: 3 },
], {
  getName(key) { return this.get(key)?.label;}
}); // 或者使用继承

export default () => (<>
  <div>
    valueOf: {JSON.stringify(enumHelperSuper.valueOf())}
  </div>
  <div>
    getData: {JSON.stringify(enumHelperSuper.getData())}
  </div>
  <div>
    get: {JSON.stringify(enumHelperSuper.get('a'))}
    <br />
    get: {JSON.stringify(enumHelperSuper.get('label', 'B'))}
  </div>
  <div>
    getLabel: {enumHelperSuper.getLabel('a')}
  </div>
  <div>
    getValue: {enumHelperSuper.getValue('a')}
  </div>
  <div>
    getName: {enumHelperSuper.getName('a')}
  </div>
</>);
