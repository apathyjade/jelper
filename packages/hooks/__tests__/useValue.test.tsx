import {describe, expect, test} from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useValue from '../src/useValue';
import { useState } from 'react';
describe('useUpdateEffect', () => {
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
  test('验证 value更新', () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState(0);
      const [value, setValue] = useValue(state, setState);
      return {
        state,
        setState,
        value,
        setValue,
      };
    });
    expect(result.current.value).toBe(0);
    act(() => {
      result.current.setState(1);
    });
    expect(result.current.value).toBe(1);
    act(() => {
      result.current.setValue(2);
    });
    expect(result.current.state).toBe(2);
  })
});
