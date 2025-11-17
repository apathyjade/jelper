import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useAsync from '../src/useAsync';

test("验证useAsync", async () => {
  const asyncFn = jest.fn();
  const { result } = renderHook(() => useAsync(asyncFn));

  // 测试返回的数组
  expect(Array.isArray(result.current)).toBe(true);
  expect(result.current.length).toBe(4);

  // 测试返回值类型
  const [data, methods] = result.current;
  expect(typeof data).toBe('undefined');
  expect(typeof methods.run).toBe('function');
  expect(typeof methods.refresh).toBe('function');
  expect(typeof methods.loading).toBe('boolean');
  expect(typeof methods.error).toBe('undefined');
});
