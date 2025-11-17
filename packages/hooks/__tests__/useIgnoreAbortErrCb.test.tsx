import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useIgnoreAbortErrCb from '../src/useIgnoreAbortErrCb';

test("验证useIgnoreAbortErrCb", async () => {
  const callback = jest.fn();
  const opts = { onAbort: jest.fn() };
  const { result } = renderHook(() => useIgnoreAbortErrCb(callback, [], opts));

  // 测试返回的函数
  const returnedCallback = result.current;
  expect(typeof returnedCallback).toBe('function');

  // 测试回调函数执行
  const error = new Error('test error');
  error.name = 'AbortError';
  returnedCallback(error);
  expect(opts.onAbort).toBeCalled();
});
