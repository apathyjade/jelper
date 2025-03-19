/**
 * @jest-environment jsdom
 */
// import { useState } from 'react';
import {describe, expect, test } from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useSafeRunner from '../src/useSafeRunner';

describe('useSafeRunner', () => {
  test("验证hook销毁前正常执行", async () => {
    let bool = false;
    const { result } = renderHook(() => useSafeRunner());
    act(() => {
      result.current(() => {
        bool = true;
      });
    });
    expect(bool).toBe(true);
  });
  test("验证hook销毁后不执行", async () => {
    let bool = false;
    const { result, unmount } = renderHook(() => useSafeRunner());
    act(() => {
      unmount();
    });
    act(() => {
      result.current(() => {
        bool = true;
      });
    });
    expect(bool).toBe(false);
  });
  test("验证hook销毁后执行卸载回调", async () => {
    const { result, unmount } = renderHook(() => useSafeRunner());
    let hasRunCb = null;
    act(() => {
      unmount();
    });
    act(() => {
      result.current(() => {
        hasRunCb = false;
      }, () => {
        hasRunCb = true;
      });
    });
    expect(hasRunCb).toBe(true);
  });
  test("验证hook销毁前不执行执行卸载回调", async () => {
    const { result } = renderHook(() => useSafeRunner());
    let hasRunCb = null;
    act(() => {
      result.current(() => {
        hasRunCb = false;
      }, () => {
        hasRunCb = true;
      });
    });
    expect(hasRunCb).toBe(false);
  });
  test("验证hook正常执行Promsie返回resolve", async () => {
    const { result } = renderHook(() => useSafeRunner());
    let resolveValue = false;
    await act(async () => {
      await result.current(() => {
        return Promise.resolve(true);
      }).then(() => {
        resolveValue = true;
      });
    });
    expect(resolveValue).toBe(true);
  });
  test("验证hook正常执行返回promise.then", async () => {
    const { result } = renderHook(() => useSafeRunner());
    let resolveValue = false;
    await act(async () => {
      await result.current(() => {
        return true;
      }).then(() => {
        resolveValue = true;
      });
    });
    expect(resolveValue).toBe(true);
  });
  test("验证hook正常执行返回promise.catch", async () => {
    const { result } = renderHook(() => useSafeRunner());
    let rejectValue = false;
    await act(async () => {
      await result.current(() => {
        const asd = 12;
        (asd as unknown as Function)();
      }).catch(() => {
        rejectValue = true;
      });
    });
    expect(rejectValue).toBe(true);
  });
  test("验证hook卸载不执行执行Promsie返回", async () => {
    const { result, unmount } = renderHook(() => useSafeRunner());
    let unmountValue = false;
    act(() => unmount());
    await act(async () => {
      await new Promise((resolve) => {
        result.current(() => {

        }).finally(() => {
          unmountValue = false;
          resolve(null);
        });
        setTimeout(() => resolve(null), 0)
      });
    });
    expect(unmountValue).toBe(false);
  });
});
