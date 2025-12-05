import {expect, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useRtRef from '../src/useRtRef';
import { useState } from 'react';

test("验证useRtRef", async () => {
  const { result } = renderHook(() => {
    const [state, setState] = useState(1);
    return {
      ref: useRtRef(state),
      setState
    };
  });
  expect(result.current.ref.current).toBe(1);
  await act(() => {
    result.current.setState(2)
  });
  expect(result.current.ref.current).toBe(2);
});
