import React from 'react';
import '@jelper/css';

export default () => {
  return (<>
    <div>
      <div className={'text-xs bg-blue blue'}>text-xs</div>
      <div className={'text-s bg-blue blue'}>text-s</div>
      <div className={'text-m bg-blue blue'}>text-m</div>
      <div className={'text-l  bg-blue blue'}>text-l</div>
      <div className={'text-xl bg-blue blue'}>text-xl</div>
    </div>
    <br />
    <div>
      <div className={'text-m bg-blue blue'}>
        <div className={'text-xs inline'}>text-xs</div>
        <div className={'text-s inline'}>text-s</div>
        <div className={'text-m inline'}>text-m</div>
        <div className={'text-l inline'}>text-l</div>
        <div className={'text-xl inline'}>text-xl</div>
      </div>
    </div>
  </>);
};
