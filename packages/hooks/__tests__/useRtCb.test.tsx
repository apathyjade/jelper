import {expect, jest, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useRtCb from '../src/useRtCb';

test("验证useRtCb", async () => {
  const callback = jest.fn();
  const { result } = renderHook(() => useRtCb(callback));

  // 测试回调函数执行
  act(() => {
    result.current();
  });
  expect(callback).toBeCalled();
});
