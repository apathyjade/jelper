/*
 * @Author: apathyjade
 * @Date: 2023-12-14 16:51:29
 * @Last Modified by: apathyjade
 * @Last Modified time: 2023-12-14 17:15:27
 */

import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (): [
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

export default useTimeout;
