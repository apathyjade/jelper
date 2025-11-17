import {expect, test} from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useRtRef from '../src/useRtRef';

test("验证useRtRef", async () => {
  const { result } = renderHook(() => useRtRef(1));

  // 初始值
  expect(result.current.current).toBe(1);

  // 测试更新值
  const newRef = renderHook(() => useRtRef(2));
  expect(newRef.result.current.current).toBe(2);
});
