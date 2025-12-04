import {describe, expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useInterval from '../src/useInterval';
import { openFakeTimers } from './utils';

describe('useInterval', () => {
  openFakeTimers();
  test("验证effect执行", async () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() => useInterval(callback, 100));
    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(240);
    expect(callback).toHaveBeenCalledTimes(2);
    unmount();
    jest.advanceTimersByTime(240);
    expect(callback).toHaveBeenCalledTimes(2);
  });
  test("验证返回清除", async () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useInterval(callback, 100));
    result.current();
    jest.advanceTimersByTime(240);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});

