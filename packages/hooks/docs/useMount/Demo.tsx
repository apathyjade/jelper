
import React, { useEffect, useState } from 'react';
import { useMount } from '@jelper/hooks';


export default () => {
  useMount(() => {
    console.log('同 useEffect(() => {}, [])')
  });
  return <>
    useMount
  </>
};
