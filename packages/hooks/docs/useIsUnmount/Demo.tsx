
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useIsUnmount } from '@jelper/hooks';

const MountedNode = () => {
  const isUnmounted = useIsUnmount();

  useEffect(() => {
    console.log('useEffect', isUnmounted());
    return () => {
      console.log('isMounted', isUnmounted());
    };
  }, [])

  return <>MountedNode</>
};

export default () => {
  const [state, setState] = useState(true);

  console.log('render');
  return <>
    { state ? <MountedNode /> : undefined}
    <Button onClick={() => setState(!state)}>Mounte</Button>
  </>
};
