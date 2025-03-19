
import {expect, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useIsMounted from '../src/useIsMounted';
import { useEffect } from 'react';

test("验证useIsMounted", async () => {
  renderHook(() => {
    const isMounted = useIsMounted();
    useEffect(() => {
      expect(isMounted()).toBe(true);
      return () => {
        expect(isMounted()).toBe(false);
      }
    });
    expect(isMounted()).toBe(false);
  });
});
