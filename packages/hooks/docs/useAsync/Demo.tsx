
import React from 'react';
import { Spin, Button } from 'antd';
import { useAsync } from '@jelper/hooks';


const fetchData = () => {
  return new Promise((r) => {
    setTimeout(() => {
      r('ok');
    }, 1500)
  })
}

export default () => {
  const [data, api] = useAsync(fetchData, { immediate: true });


  const [handleData, handleApi] = useAsync(fetchData, { immediate: false });
  return <>
     <Spin spinning={api.loading}>
      data: {data || '-'}
    </Spin>
    <br />
     <Spin spinning={handleApi.loading}>
      handleData: {handleData || '-'}
      <Button onClick={handleApi.run}>获取数据</Button>
    </Spin>
  </>
};
