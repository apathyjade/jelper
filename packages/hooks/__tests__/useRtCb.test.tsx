import {describe, expect, jest, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useRtCb from '../src/useRtCb';

describe('useRtCb', () => {
  test("验证 无参数调用", async () => {
      const cb = jest.fn<() => void>();
      const { result } = renderHook(() => useRtCb(cb));
      act(() => {
        result.current();
      });
      expect(cb).toHaveBeenCalledWith();
  });

  test('验证 一个参数', () => {
    const { result, rerender } = renderHook(() => {
      return useRtCb((str: string) => {
        return str;
      })
    });
    let excRes = null;
    act(() => {
      excRes = result.current('a');
    });
    expect(excRes).toBe('a');

    rerender();
    act(() => {
      excRes = result.current('b');
    });
    expect(excRes).toBe('b');
  });

  test('验证 多参数', () => {
    const cb = jest.fn<(a: string, b: number, c: boolean ) => void>();
    const { result } = renderHook(() => useRtCb(cb));
    act(() => {
      result.current('a', 1, true);
    });
    expect(cb).toHaveBeenCalledWith('a', 1, true);
  });
});
