import {describe, expect, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useIsUnmounted from '../src/useIsUnmount';

describe('useIsUnmounted', () => {
  test("验证状态", async () => {
    const {result, unmount} = renderHook(() => useIsUnmounted());
    expect(result.current()).toBe(false);
    unmount();
    expect(result.current()).toBe(true);
  });
});
