import {expect, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useValue from '../src/useValue';

test("验证useValue", async () => {
  const { result } = renderHook(() => useValue(false));

  // 初始值为 false
  expect(result.current[0]).toBe(false);

  // 测试更新值
  act(() => {
    result.current[1](true);
  });
  expect(result.current[0]).toBe(true);

  // 测试传入参数的更新
  act(() => {
    result.current[1](false);
  });
  expect(result.current[0]).toBe(false);
});

test("验证useValue with onChange", async () => {
  let onChangeValue: boolean | undefined = undefined;
  const onChange = (value: boolean) => {
    onChangeValue = value;
  };

  const { result } = renderHook(() => useValue<boolean>(false, onChange));

  // 初始值为 false
  expect(result.current[0]).toBe(false);

  // 测试更新值
  act(() => {
    result.current[1](true);
  });
  expect(result.current[0]).toBe(true);
  expect(onChangeValue).toBe(true);
});
