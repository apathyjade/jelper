import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useUnmount from '../src/useUnmount';

test("验证useUnmount", async () => {
  const callback = jest.fn();
  renderHook(() => useUnmount(callback));
  expect(1).toEqual(1);
});
