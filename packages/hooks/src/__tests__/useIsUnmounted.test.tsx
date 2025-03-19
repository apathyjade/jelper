
import { expect, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useIsUnmounted from '../useIsUnmounted';
import { useEffect } from 'react';

test("验证useIsUnmounted", async () => {
  renderHook(() => {
    const isUnmounted = useIsUnmounted();
    useEffect(() => {
      expect(isUnmounted()).toBe(false);
      return () => {
        expect(isUnmounted()).toBe(true);
      }
    }, []);
    expect(isUnmounted()).toBe(false);
  });
});
