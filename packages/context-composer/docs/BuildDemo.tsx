import React, { ReactEventHandler, useState } from 'react';
import { Input } from 'antd';
import createCtxComposer from '@jelper/context-composer';


interface HooksParams {

}
interface HooksValue {
  glabalType: string;
  setGlabalType: (val: string) => void;
}
const { forwardComposer, useComposerCtx, buildHooks } = createCtxComposer<HooksParams, HooksValue>((props: HooksParams) => {
  const [glabalType, setGlabalType] = useState('light')
  return {
    glabalType,
    setGlabalType,
  }
});
const useGlabalTypeState = buildHooks<string, [string, (p: string) => void]>(({ glabalType, setGlabalType }) => {
  return (params: string) => {
    return [glabalType, setGlabalType]
  }
});

const TestCom = () => {
  const [type, setType] = useGlabalTypeState();
  return (
    <>
      <div>glabalType: {type}</div>
      <Input value={type} onChange={(ev) => setType(ev.target.value)} />
    </>
  );
};

export default forwardComposer(TestCom);


