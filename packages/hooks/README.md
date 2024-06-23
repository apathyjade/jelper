# @jelper/hooks

react基础hooks工具包

## 安装

``` bash
npm install @jelper/hooks --save
```

## 使用

```javascript

import { useXxx } from '@jelper/hooks';

```

## API

### useSafeState

说明

用法同 useState, 当调用组件销毁时，不再更新 state

### useSafeCb

用法同 useCallback, 当调用组件销毁时，不再执行回调函数


