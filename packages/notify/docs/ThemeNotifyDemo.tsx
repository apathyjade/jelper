import React, { useState, useEffect } from 'react';
import { buildThemeNotify } from '@jelper/notify';

let themeNotify = buildThemeNotify();
let themeNotify2 = buildThemeNotify();

const TestCom = () => {

  const [theme, setTheme] = useState();

  const [theme2, setTheme2] = useState();

  useEffect(() => {
    themeNotify.on(setTheme);
    
  }, []);
  useEffect(() => {
    themeNotify2.on(setTheme2);
  }, []);

  return (
    <div>主题：{theme} === {theme2}</div>
  );
};

export default () => {
  return (<TestCom />)
};


