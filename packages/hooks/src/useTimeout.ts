/**
 * @Author: apathyjade
 * @Date: 2025-03-19 23:10:13
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-30 18:24:42
 */

import { useCallback, useEffect, useRef } from 'react';
import useRtCb from './useRtCb';

export const useTimeoutHandler = (): [
  (callback: Function, timeout?: number, ...arg: any[]) => void,
  () => void,
] => {
  const timerRef = useRef<number>();
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  const bindTimer = useCallback((callback: Function, timeout?: number, ...arg: any[]) => {
    clearTimer();
    timerRef.current = window.setTimeout(() => {
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

export const useTimeout = (callback: Function, timeout?: number, ...arg: any[]): () => void => {
  const [bindTimer, clearTimer] = useTimeoutHandler();

  const cb = useRtCb(callback);

  useEffect(() => {
    bindTimer(cb, timeout, ...arg);
    return clearTimer;
  }, [cb, timeout, ...arg]);
  return clearTimer;
};

export default useTimeout;
