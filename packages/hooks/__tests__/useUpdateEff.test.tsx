/**
 * @jest-environment jsdom
 */

import {describe, expect, jest, test} from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import useUpdateEffect from '../src/useUpdateEff';
import { useState } from 'react';

describe('useUpdateEffect', () => {
  test("验证effect更新执行", async () => {
    const callback = jest.fn<any>();
    const { result } = renderHook(() => {
      const [state, setState] = useState(0);
      useUpdateEffect(callback, [state])
      return () => setState(v => v + 1);
    });
    expect(callback).toHaveBeenCalledTimes(0);
    await act(() => result.current());
    expect(callback).toHaveBeenCalledTimes(1);
    await act(() => result.current());
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
