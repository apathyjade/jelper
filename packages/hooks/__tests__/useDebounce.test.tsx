import {expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useDebounce from '../src/useDebounce';

test("验证useDebounce", async () => {
  const callback = jest.fn();
  const { result } = renderHook(() => useDebounce(callback, 100));
  expect(typeof result).toBe('object');
});
