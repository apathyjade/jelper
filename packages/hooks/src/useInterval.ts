/*
 * @Author: apathyjade
 * @Date: 2023-12-14 16:51:29
 * @Last Modified by: apathyjade
 * @Last Modified time: 2024-03-14 16:32:55
 */

import { useCallback, useEffect, useRef } from 'react';
import useRtCb from './useRtCb';

const useInterval = (callback: DefFn, delay: number) => {
  const timerRef = useRef<number|undefined>();
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
  }, []);
  const cb = useRtCb(callback)
  useEffect(() => {
    timerRef.current = window.setInterval(cb, delay);
    return () => {
      clearTimer();
    }
  }, [delay])
  return clearTimer;
}

export default useInterval;
