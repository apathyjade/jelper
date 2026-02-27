import { useCallback, useEffect, useRef } from 'react';
import useRtCb from './useRtCb';
import useRtRef from './useRtRef';

export const useTimeoutHandler = (): [
  (callback: Function, timeout?: number, ...arg: any[]) => void,
  () => void,
] => {
  const timerRef = useRef<number | undefined>(undefined);
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

export const useTimeout = <T extends (...any: any[]) => any>(callback: T, timeout?: number, ...args: any[]|[]): () => void => {
  const [bindTimer, clearTimer] = useTimeoutHandler();
  const cb = useRtCb(callback);
  const argsRef = useRtRef(args);
  useEffect(() => {
    bindTimer(cb, timeout, ...argsRef.current);
    return clearTimer;
  }, [cb, timeout]);
  return clearTimer;
};

export default useTimeout;
