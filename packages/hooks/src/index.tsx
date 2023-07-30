
export { default as useSwitch } from './useSwitch';
import { default as useLifeCycle } from './useLifeCycle';

import React, { useState, useCallback } from 'react';

export const Test = () => {
  const [value, setValue] = useState(0)
  const onMount = useCallback(() => {
    console.log(value);
  }, [value]);
  const onUnmount = useCallback(() => {
    console.log(value);
  }, [value]);
  const { isUnmount } = useLifeCycle({
    onMount,
    onUnmount,
  })
  return <p onClick={() => setValue(i => i + 1)}>ADD {value} {isUnmount ? 'true' : 'false'}</p>;
};
export const Demos = () => {
  const [bool, setBool] = useState(true);
  return (
    <div>
      <div onClick={ () => setBool(false) }>
        Hidden
      </div>
      {
        bool
          ? <Test />
          : undefined}
    </div>
  );
};
