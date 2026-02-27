import { useCallback, useEffect, useRef } from 'react';
import useRtCb from './useRtCb';
import useRtRef from './useRtRef';

export const useIntervalHandler = (): [
  (callback: Function, timeout?: number, ...arg: any[]) => void,
  () => void,
] => {
  const timerRef = useRef<number | undefined>(undefined);
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

export const useInterval = <T extends (...args: any[]) => any>(callback: T, timeout?: number, ...args: Parameters<T>|[]): (() => void) => {
  const [bindTimer, clearTimer] = useIntervalHandler();
  const cb = useRtCb(callback);
  const argsRef = useRtRef(args);
  useEffect(() => {
    bindTimer(cb, timeout, ...argsRef.current)
    return clearTimer
  }, [cb, timeout]);
  return clearTimer;
};

export default useInterval;
