
import React, { DOMElement, useEffect, useRef, useState } from 'react';
import { Input } from 'antd';
import { useResizeObserver, useResizeObserverHandler } from '@jelper/hooks';

export default () => {
  const [val, setVal] = useState('');
  const [valHandler, setValHandler] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const refHandler = useRef<HTMLDivElement>(null);

  useResizeObserver(ref, (entry) => {
    setVal(`变更高度为 ${entry.target.clientHeight}`);
  });

  const [observe, unobserve] = useResizeObserverHandler();

  useEffect(() => {
    observe(refHandler.current, (entry) => {
      setValHandler(`变更高度为 ${entry.target.clientHeight}`);
    });
    return () => unobserve(refHandler.current);
  }, []);

  return <>
    useResizeObserver:
    <div ref={ref}>
      <Input.TextArea  value={val}/>
    </div>
    useResizeObserverHandler:
    <div ref={refHandler}>
      <Input.TextArea  value={valHandler}/>
    </div>
  </>
};
