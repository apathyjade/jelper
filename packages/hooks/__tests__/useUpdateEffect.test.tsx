/**
 * @jest-environment jsdom
 */

import {describe, expect, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useUpdateEffect from '../src/useUpdateEff';
import { buildPromise } from './utils';
import { useEffect, useState } from 'react';

describe('useUpdateEffect', () => {
  test("验证effect更新执行", async () => {
    const [p, resolve] = buildPromise();
    let i = 0;

    renderHook(() => {
      const [state, setState] = useState(0);
      useUpdateEffect(() => {
        i++;
        if (state === 1) {
          resolve(i);
        }
      }, [state]);
      useEffect(() => {
        setState(1)
      }, []);
    });

    await p.then(res => {
      expect(res).toBe(1);
    });
  });
});
