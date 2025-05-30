
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useIsMounted } from '@jelper/hooks';

const MountedNode = () => {
  const isMounted = useIsMounted();

  useEffect(() => {
    console.log('useEffect', isMounted());
    return () => {
      console.log('isMounted', isMounted());
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
