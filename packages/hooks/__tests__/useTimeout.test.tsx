import {expect, jest, test } from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useTimeout from '../src/useTimeout';

test("验证useTimeout", async () => {
  const callback = jest.fn();
  const { result } = renderHook(() => useTimeout(callback, 100));

  // 测试返回的函数
  const clearTimer = result.current;
  expect(typeof clearTimer).toBe('function');
});
