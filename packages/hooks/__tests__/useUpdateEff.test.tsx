import {expect, jest, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useUpdateEff from '../src/useUpdateEff';

test("验证useUpdateEff", async () => {
  const callback = jest.fn();
  const { result } = renderHook(() => useUpdateEff(callback));

  // 测试回调函数执行
  act(() => {
    result.current();
  });
  expect(callback).toBeCalled();
});
