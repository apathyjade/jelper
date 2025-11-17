import {expect, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useBoolState from '../src/useBoolState';

test("验证useBoolState", async () => {
  const { result } = renderHook(() => useBoolState(false));

  // 初始值为 false
  expect(result.current[0]).toBe(false);

  // 测试切换函数
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);

  // 再次切换
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(false);

  // 测试传入参数的切换
  act(() => {
    result.current[1](true);
  });
  expect(result.current[0]).toBe(true);

  // 测试传入参数的切换为 false
  act(() => {
    result.current[1](false);
  });
  expect(result.current[0]).toBe(false);
});
