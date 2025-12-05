import {describe, expect, jest, test} from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import useIgnoreAbortErrCb from '../src/useIgnoreAbortErrCb';

describe('useIgnoreAbortErrCb', () => {
  test("非AbortError", async () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useIgnoreAbortErrCb(callback));
    await act(() => {
      result.current(new Error());
    });
    expect(callback).toHaveBeenCalled();
  });
  test("AbortError", async () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useIgnoreAbortErrCb(callback));
    await act(() => {
      result.current(new DOMException('The operation was aborted', 'AbortError'));
    });
    expect(callback).not.toHaveBeenCalled();
  });

  test("onAbort", async () => {
    const onAbort = jest.fn<(err: Error) => void>();

    const { result } = renderHook(() => useIgnoreAbortErrCb(() => {}, [], { onAbort }));
    await act(() => {
      result.current(new DOMException('The operation was aborted', 'AbortError'));
    });
    expect(onAbort).toHaveBeenCalled();
  });
});
