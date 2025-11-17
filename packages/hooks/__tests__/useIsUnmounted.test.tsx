import {expect, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useIsUnmounted from '../src/useIsUnmount';

test("验证useIsUnmounted", async () => {
  const { result } = renderHook(() => useIsUnmounted());

  // 初始值应该返回一个函数
  expect(typeof result.current).toBe('function');

  // 测试返回的函数
  const isUnmounted = result.current;
  expect(isUnmounted()).toBe(false);
});
