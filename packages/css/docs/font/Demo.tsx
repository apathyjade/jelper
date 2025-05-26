import React from 'react';
import '@jelper/css';

export default () => {
  return (<>
    <>
      <div className={'fs-xs'} >字体大小 fs-xs</div>
      <div className={'fs-s'} >字体大小 fs-s</div>
      <div className={'fs-m'} >字体大小 fs-m</div>
      <div className={'fs-l'} >字体大小 fs-l</div>
      <div className={'fs-xl'} >字体大小 fs-xl</div>
      <div className={'fs-2xl'} >字体大小 fs-2xl</div>
      <div className={'fs-3xl'} >字体大小 fs-3xl</div>
    </>
    <>
      <div className={'fw-s'} >字体weight fw-s</div>
      <div className={'fw-m'} >字体weight fw-m</div>
      <div className={'fw-l'} >字体weight fw-l</div>
    </>
  </>);
};
