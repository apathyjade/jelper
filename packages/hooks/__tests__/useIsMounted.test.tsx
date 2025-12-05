
import {describe, expect, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useIsMounted from '../src/useIsMounted';

describe('useIsMounted', () => {
  test("验证状态", async () => {
    const {result, unmount} = renderHook(() => useIsMounted());
    expect(result.current()).toBe(true);
    unmount();
    expect(result.current()).toBe(false);
  });
});
