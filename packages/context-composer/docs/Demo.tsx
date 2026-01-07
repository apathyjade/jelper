import React, { JSX, useState } from 'react';
import { Input } from 'antd';
import createCtxComposer from '@jelper/context-composer';


interface ComposerParams {
  hasBorder: boolean;
}
interface HooksValue {
  glabalType: string;
  setGlabalType: (val: string) => void;
}

type ForwardCom = ({ name }: { name: string }) => JSX.Element;

const opts = {
  builder(props: ComposerParams, Com: ForwardCom) {
    return <div style={{ border: props.hasBorder ? '1px solid #f60' : undefined, padding: '4px 12px' }}>
      <Com name="base-api-test" />
    </div>
  }
}

const { forwardComposer, useComposerCtx } = createCtxComposer<ComposerParams, HooksValue>((props: ComposerParams) => {
  const [glabalType, setGlabalType] = useState('light')
  return {
    glabalType,
    setGlabalType,
  }
}, opts);

const TestCom = ({ name }: { name: string}) => {
  const {glabalType, setGlabalType} = useComposerCtx();
  return (
    <>
      <div>name: {name ?? '--'}</div>
      <div>glabalType: {glabalType}</div>
      <Input value={glabalType} onChange={(ev) => setGlabalType(ev.target.value)} />
    </>
  );
};

const Demo = forwardComposer(TestCom)

export default () => <Demo hasBorder={true} />;


