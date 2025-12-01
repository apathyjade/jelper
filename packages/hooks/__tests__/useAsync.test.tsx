import {expect, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useAsync from '../src/useAsync';

test("验证useAsync", async () => {
  const asyncFn = async () => {

  };
  const { result } = renderHook(() => useAsync(asyncFn));

  expect(typeof result).toEqual('object');
});
