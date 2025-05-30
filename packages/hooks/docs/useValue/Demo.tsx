
import React, { DOMElement, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { useValue } from '@jelper/hooks';

const Item = ({ value, onChange }) => {
  const [val, setVal] = useValue(value, onChange);
  return <>
    Item val: {val}
    <br />
     <Button onClick={() => setVal(val + 1)}>Item++</Button>
  </>
}


export default () => {
  const [val, setVal] = useState(0);
  return <>
    def val: {val}
    <br />
    <Button onClick={() => setVal(val + 1)}>def++</Button>
    <br />
    <Item value={val} onChange={setVal} />
  </>
};
