/*
 * @Author: apathyjade
 * @Date: 2023-12-14 16:51:29
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-30 18:24:00
 */

import { useCallback, useEffect, useRef } from 'react';
import useRtCb from './useRtCb';

export const useIntervalHandler = (): [
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
      callback(...arg);
    }, timeout);
  }, []);
  useEffect(() => clearTimer);
  return [
    bindTimer,
    clearTimer,
  ];
}

export const useInterval = (callback: Function, timeout?: number, ...arg: any[]): (() => void) => {

  const [bindTimer, clearTimer] = useIntervalHandler();

  const cb = useRtCb(callback);

  useEffect(() => {
    bindTimer(cb, timeout, ...arg)
    return clearTimer
  }, [cb, timeout, ...arg]);
  return clearTimer;
};

export default useInterval;
