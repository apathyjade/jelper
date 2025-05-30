
import React, { useEffect } from 'react';
import { useCreate } from '@jelper/hooks';



export default () => {
  useCreate(() => {
    console.log('useCreate');
  });

  console.log('render');
  return <>首次渲染同步执行</>
};
