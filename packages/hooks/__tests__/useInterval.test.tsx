import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useInterval from '../src/useInterval';

test("验证useInterval", async () => {
  const callback = jest.fn();
  const { result } = renderHook(() => useInterval(callback, 100));

  // 测试返回的函数
  const clearTimer = result.current;
  expect(typeof clearTimer).toBe('function');
});
