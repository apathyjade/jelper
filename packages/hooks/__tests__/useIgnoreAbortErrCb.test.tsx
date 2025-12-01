import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useIgnoreAbortErrCb from '../src/useIgnoreAbortErrCb';

test("验证useIgnoreAbortErrCb", async () => {
  const callback = jest.fn();
  const opts = { onAbort: jest.fn() };
  const { result } = renderHook(() => useIgnoreAbortErrCb(callback, [], opts));
  expect(typeof result).toEqual('object');
});
