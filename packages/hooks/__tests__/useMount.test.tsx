import { describe, expect, jest, test } from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useMount from '../src/useMount';

describe('useMount', () => {
  test("验证状态", async () => {
    const fn = jest.fn();
    renderHook(() => useMount(fn));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
