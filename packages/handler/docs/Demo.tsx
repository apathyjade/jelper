
import React from 'react';
import { MultipleHandler, SingleHandler } from '@jelper/handler';

const single = SingleHandler.build(); // new SingleHandler();
single.on(() => {
  console.log('不执行');
});
single.on((data) => {
  console.log(data)
});
single.call('single').then(() => {

}); // single
single.off();

const multiple = MultipleHandler.build();
multiple.on(() => {
  console.log('同步');
});
multiple.on(async (data) => {
  console.log('异步', data);
});
multiple.call('multiple').then(() => {
  console.log('end');
});// 或者使用继承

export default () => (<>
</>);
