
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useOption } from '@jelper/hooks';


export default () => {
  const [opt, api] = useOption({ a: 12 });
  return <>
    opt: {JSON.stringify(opt)}
    <br />
    <Button onClick={() => api.setOption({ b: 12 })}>api.setOption</Button>
    <Button onClick={() => api.update({ b: 12 })}>api.update</Button>
    <Button onClick={() => api.reset()}>api.reset</Button>
  </>
};
