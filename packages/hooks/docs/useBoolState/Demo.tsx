
import React from 'react';
import { Spin, Button } from 'antd';
import { useBoolState } from '@jelper/hooks';


export default () => {
  const [val, swichVal] = useBoolState(false);

  return <>
    <div>数据值： {val === true ? 'true' : 'false'}</div>
    <Button onClick={() => swichVal()}>切换</Button>
    <Button onClick={() => swichVal(true)}>设置true</Button>
    <Button onClick={() => swichVal(false)}>设置false</Button>
  </>
};
