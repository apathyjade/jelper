import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useMount from '../src/useMount';

test("验证useMount", async () => {
  const callback = jest.fn();
  renderHook(() => useMount(callback));

  // 测试回调函数执行
  expect(callback).toBeCalled();
});
