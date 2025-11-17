import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useDebounce from '../src/useDebounce';

test("验证useDebounce", async () => {
  const callback = jest.fn();
  const { result } = renderHook(() => useDebounce(callback, 100));

  // 测试返回的函数
  const debouncedCallback = result.current;
  expect(typeof debouncedCallback).toBe('function');
});
