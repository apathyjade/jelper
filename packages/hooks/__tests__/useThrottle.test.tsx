import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useThrottle from '../src/useThrottle';

test("验证useThrottle", async () => {
  const callback = jest.fn();
  const { result } = renderHook(() => useThrottle(callback, 100));

  // 测试返回的函数
  const throttledCallback = result.current;
  expect(typeof throttledCallback).toBe('function');
});
