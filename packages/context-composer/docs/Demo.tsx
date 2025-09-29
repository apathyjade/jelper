import React, { useState } from 'react';
import { Input } from 'antd';
import createCtxComposer from '@jelper/context-composer';


interface HooksParams {

}
interface HooksValue {
  glabalType: string;
  setGlabalType: (val: string) => void;
}
const { forwardComposer, useComposerCtx } = createCtxComposer<HooksParams, HooksValue>((props: HooksParams) => {
  const [glabalType, setGlabalType] = useState('light')
  return {
    glabalType,
    setGlabalType,
  }
});

const TestCom = () => {
  const {glabalType, setGlabalType} = useComposerCtx();
  return (
    <>
      <div>glabalType: {glabalType}</div>
      <Input value={glabalType} onChange={(ev) => setGlabalType(ev.target.value)} />
    </>
  );
};

export default forwardComposer(TestCom);


