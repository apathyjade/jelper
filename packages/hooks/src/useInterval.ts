/*
 * @Author: apathyjade
 * @Date: 2023-12-14 16:51:29
 * @Last Modified by: apathyjade
 * @Last Modified time: 2024-03-14 16:32:55
 */

import { useState, useCallback, useEffect, useRef, useMemo } from 'react';

window.requestAnimationFrame;
window.cancelAnimationFrame;
window.requestIdleCallback;
window.cancelIdleCallback

window.setTimeout
window.clearTimeout
window.setInterval
window.clearInterval


const createTimeout = (): [
  (callback: Function, timeout?: number, ...args: any[]) => void,
  () => void
] => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const clear = () => {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  };
  const set = (callback: Function, timeout = 0, ...args: any[]) => {
    clear(); // 防抖：每次调用前清除上一个定时器
    timer = setTimeout(() => {
      timer = undefined;
      callback(...args);
    }, timeout);
  };
  return [set, clear];
};

const useTimeout = () => {
  const api = useMemo(createTimeout, []);
  useEffect(api[1])
  return api;
}


const useInterval = (): [
  (callback: Function, timeout?: number, ...arg: any[]) => void,
  () => void,
] => {
  const timerRef = useRef<number>();
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  const bindTimer = useCallback((callback: Function, timeout?: number, ...arg: any[]) => {
    clearTimer();
    timerRef.current = window.setInterval(() => {
      timerRef.current = undefined;
      callback(...arg);
    }, timeout);
  }, []);
  useEffect(() => clearTimer);
  return [
    bindTimer,
    clearTimer,
  ];
};

export default useInterval;
