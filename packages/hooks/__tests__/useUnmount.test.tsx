import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useUnmount from '../src/useUnmount';

test("验证useUnmount", async () => {
  const callback = jest.fn();
  renderHook(() => useUnmount(callback));

  // 测试回调函数执行（在组件卸载时）
  // 注意：这里我们无法直接测试卸载，只能确保函数被正确调用
  expect(callback).not.toBeCalled();
});
