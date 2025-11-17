import {expect, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useOption from '../src/useOption';

test("验证useOption", async () => {
  const defOpt = { a: 1, b: 2 };
  const { result } = renderHook(() => useOption(defOpt));

  // 初始值
  expect(result.current[0]).toEqual(defOpt);

  // 测试更新选项
  act(() => {
    result.current[1].update({ c: 3 });
  });
  expect(result.current[0]).toEqual({ ...defOpt, c: 3 });

  // 测试重置选项
  act(() => {
    result.current[1].reset();
  });
  expect(result.current[0]).toEqual(defOpt);

  // 测试直接设置选项
  act(() => {
    result.current[1].setOption({ d: 4 });
  });
  expect(result.current[0]).toEqual({ d: 4 });
});
