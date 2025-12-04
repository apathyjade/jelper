import {describe, expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useTimeout from '../src/useTimeout';
import { openFakeTimers } from './utils';

describe('useTimeout', () => {
  openFakeTimers();
  test("验证effect执行", async () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() => useTimeout(callback, 100));
    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(240);
    expect(callback).toHaveBeenCalledTimes(1);
    unmount();
    jest.advanceTimersByTime(240);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test("验证返回清除", async () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useTimeout(callback, 100));
    result.current();
    jest.advanceTimersByTime(240);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
