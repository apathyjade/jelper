import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useUnmount from '../src/useUnmount';

test("验证useUnmount", async () => {
  const callback = jest.fn();
  const { unmount, rerender } = renderHook(() => useUnmount(callback));
  expect(callback).toHaveBeenCalledTimes(0);
  rerender()
  expect(callback).toHaveBeenCalledTimes(0);
  unmount();
  expect(callback).toHaveBeenCalledTimes(1);
});
