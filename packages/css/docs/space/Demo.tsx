import React from 'react';
import '@jelper/css';

const styleObj = {
  height: '16px',
  background: 'var(--aj_color_blue)',
}

export default () => {
  return (<>
    <div className={'mg-xs'} style={styleObj}></div>
    <div className={'mg-s'} style={styleObj}></div>
    <div className={'mg-m'} style={styleObj}></div>
    <div className={'mg-l'} style={styleObj}></div>
    <div className={'mg-xl'} style={styleObj}></div>
    <div className={'mg-2xl'} style={styleObj}></div>
    <div className={'mg-3xl'} style={styleObj}></div>
    <div className={'mg-4xl'} style={styleObj}></div>
    <div className={'mg-5xl'} style={styleObj}></div>


    <div className={'mg-l-xs mg-r-xs  mg-t-xs mg-b-xs'} style={styleObj}></div>
    <div className={'mg-l-s mg-r-s mg-t-s mg-b-s'} style={styleObj}></div>
    <div className={'mg-l-m mg-r-m mg-t-m mg-b-m'} style={styleObj}></div>
    <div className={'mg-l-l mg-r-l mg-t-l mg-b-l'} style={styleObj}></div>
    <div className={'mg-l-xl mg-r-xl mg-t-xl mg-b-xl'} style={styleObj}></div>
    <div className={'mg-l-2xl mg-r-2xl mg-t-2xl mg-b-2xl'} style={styleObj}></div>
    <div className={'mg-l-3xl mg-r-3xl mg-t-3xl mg-b-3xl'} style={styleObj}></div>
    <div className={'mg-l-4xl mg-r-4xl mg-t-4xl mg-b-4xl'} style={styleObj}></div>
    <div className={'mg-l-5xl mg-r-5xl mg-t-5xl mg-b-5xl'} style={styleObj}></div>
  </>);
};
