import {describe, expect, jest, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useCreate from '../src/useCreate';

describe('useCreate', () => {
  test("验证同步", async () => {
    const callback = jest.fn();
    renderHook(() => useCreate(callback));
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test("验证执行一次", async () => {
    const callback = jest.fn();
    const { rerender } = renderHook(() => useCreate(callback));
    rerender();
    rerender()
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

