import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useRtCb from '../src/useRtCb';

test("验证useRtCb", async () => {
  const callback = jest.fn();
  const { result } = renderHook(() => useRtCb(callback));
  expect(typeof result).toEqual('object')
});
