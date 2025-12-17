import React, { useState } from 'react';
import { Input } from 'antd';
import { setProvide, reletion, getProvide } from '@jelper/di';

import type { Provider, Require } from '@jelper/di';


type FormatLogRequireType = (str: string) => string;
type FormatLogProvider = Provider<FormatLogRequireType>;


const formatLogProvider: FormatLogProvider = {
  token: Symbol('FormatLog'),
  type: 'FormatLog',
  useValue: (str: string) => {
    return `Log Formatted: ${str}`;
  }
}
setProvide(formatLogProvider);

const formatLogRequire: Require = { token: Symbol('FormatLog'), type: 'FormatLog' }
const formatLogRequire2: Require = { token: Symbol('FormatLog2'), type: 'FormatLog' }
const formatLog = getProvide<FormatLogRequireType>(formatLogRequire);
const formatLog2 = getProvide<FormatLogRequireType>(formatLogRequire2);

type FormatTimeRequireType = (str: string) => string;
type FormatTimeProvider = Provider<FormatTimeRequireType>;
const formatTimeProvider: FormatTimeProvider = {
  token: Symbol('FormatTime'),
  type: 'FormatTime',
  useValue: (str: string) => {
    return `Time Formatted: ${str}`;
  }
}
const formatTimeRequire: Require = { token: Symbol('FormatTime'), type: 'FormatTime' }
reletion(formatTimeRequire, formatTimeProvider);
const formatTime = getProvide<FormatTimeRequireType>(formatTimeRequire);

const TestCom = () => {
  return (
    <div>
      <div>通用Provider</div>
      <div>FormatLog: {formatLog('Hello World')} </div>
      <div>FormatLog2: {formatLog2('Hello World2')}</div>
      <div>relation 注册 Provider</div>
      <div>FormatTime: {formatTime('Hello World')}</div>
    </div>
  );
};

export default () => {
  return (<TestCom />)
};


