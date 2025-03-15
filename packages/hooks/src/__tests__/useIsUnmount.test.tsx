/**
 * @jest-environment jsdom
 */
// import { useState } from 'react';
import {describe, expect, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useIsUnmount from '../useIsUnmounted';

describe('useIsUnmount', () => {
  test("验证hook销毁前运行结果", async () => {
    const { result } = renderHook(() => useIsUnmount());
    expect(result.current()).toBe(false);
  });
  test("验证hook销毁后运行结果", async () => {
    const { result, unmount } = renderHook(() => useIsUnmount());
    act(() => {
      unmount();
    });
    expect(result.current()).toBe(true);
  });
});
