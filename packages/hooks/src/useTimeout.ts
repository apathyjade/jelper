/*
 * @Author: apathyjade
 * @Date: 2023-12-14 16:51:29
 * @Last Modified by: apathyjade
 * @Last Modified time: 2023-12-14 17:15:27
 */

import { useCallback, useEffect, useRef } from 'react';
import useRtCb from './useRtCb';

/**
 * 使用定时器在指定延迟后执行回调函数
 * @param callback - 回调函数
 * @param delay - 延迟时间（毫秒）
 * @returns clearTimer - 清除定时器的函数
 */
 const useTimeout = (callback: DefFn, delay: number) => {
  const timerRef = useRef<number>();
  /**
   * 清除定时器
   */
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);
  const cb = useRtCb(callback)
  useEffect(() => {
    timerRef.current = window.setTimeout(cb, delay);
    return () => {
      clearTimer();
    }
  }, [delay])
  return clearTimer;
}

export default useTimeout;
