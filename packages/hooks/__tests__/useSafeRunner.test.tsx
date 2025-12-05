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
});
