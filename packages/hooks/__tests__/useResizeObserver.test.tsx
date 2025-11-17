import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useResizeObserver from '../src/useResizeObserver';

test("验证useResizeObserver", async () => {
  const callback = jest.fn();
  const ref = { current: null };
  const { result } = renderHook(() => useResizeObserver(ref, callback));

  // 测试返回的函数
  const unobserve = result.current;
  expect(typeof unobserve).toBe('function');
});
