import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import  {createCtxComposer, mergeComposer} from '@jelper/context-composer';


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
  };
});

const { forwardComposer: forwardComposer1, useComposerCtx: useComposerCtx1 } = createCtxComposer<HooksParams, HooksValue>((props: HooksParams) => {
  const [glabalType1, setGlabalType1] = useState('light1')
  return {
    glabalType1,
    setGlabalType1,
  };
});

const mergeforwardComposer = mergeComposer([
  forwardComposer1,
  forwardComposer,
])

const TestCom = () => {
  const {glabalType, setGlabalType} = useComposerCtx();
  useEffect(() => {
    console.log('TestCom----> useEffect' )
  }, []);
  console.log('TestCom')
  return (
    <>
      <div>glabalType: {glabalType}</div>
      <Input value={glabalType} onChange={(ev) => setGlabalType(ev.target.value)} />
      <br />
    </>
  );
};
const TestCom1 = () => {
  const {glabalType1, setGlabalType1} = useComposerCtx1();
  useEffect(() => {
    console.log('TestCom1----> useEffect' )
  }, []);
  console.log('TestCom1')
  return (
    <>
      <div>glabalType1: {glabalType1}</div>
      <Input value={glabalType1} onChange={(ev) => setGlabalType1(ev.target.value)} />
      <br />
    </>
  );
};

export default mergeforwardComposer(() => {
  useEffect(() => {
    console.log('forwardComposer----> useEffect' )
  }, []);
  console.log('forwardComposer');
  return (<><TestCom /><TestCom1 /></>)
});


