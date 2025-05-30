/*
 * @Author: apathyjade
 * @Date: 2023-12-14 16:51:29
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-29 19:55:34
 */

import { useCallback, useEffect, useRef } from 'react';

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
      callback(...arg);
    }, timeout);
  }, []);
  useEffect(() => {
    return clearTimer
  }, []);
  return [
    bindTimer,
    clearTimer,
  ];
};

export default useInterval;
