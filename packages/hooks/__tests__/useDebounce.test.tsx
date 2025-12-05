import {afterEach, beforeEach, describe, expect, jest, test} from '@jest/globals';
import {act, renderHook } from '@testing-library/react';
import useDebounce from '../src/useDebounce';


describe('useDebounce', () => {
  beforeEach(() => {
    // 启用假定时器
    jest.useFakeTimers();
  });
  afterEach(() => {
    // 每个测试后恢复真实定时器
    jest.useRealTimers();
  });
  describe('验证执行', () => {
    test("延迟执行", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useDebounce(mockFn, 100));
      await act(() => {
        result.current();
      });
      expect(mockFn).not.toHaveBeenCalled();
      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalled();
    });
    test("防抖", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useDebounce(mockFn, 100));
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(50);
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(50);
      expect(mockFn).not.toHaveBeenCalled();
      jest.advanceTimersByTime(51);
      expect(mockFn).toHaveBeenCalled();
    });
  });
  describe('验证配置', () => {
    test("默认超时时间", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useDebounce(mockFn));
      await act(() => {
        result.current();
      });
      expect(mockFn).not.toHaveBeenCalled();
      jest.advanceTimersByTime(200);
      expect(mockFn).toHaveBeenCalled();
    });
    test("设置超时时间", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useDebounce(mockFn, 20));
      await act(() => {
        result.current();
      });
      expect(mockFn).not.toHaveBeenCalled();
      jest.advanceTimersByTime(20);
      expect(mockFn).toHaveBeenCalled();
    });
    test("前导执行", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useDebounce(mockFn, 200, { leading: true }));
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalled();
      jest.advanceTimersByTime(200);
    });
    test("尾执行", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useDebounce(mockFn, 200, { leading: true , trailing: false}));
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalled();
      jest.advanceTimersByTime(200);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    test("截流混合", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useDebounce(mockFn, 200, { maxWait: 300 }));
      jest.advanceTimersByTime(150);
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(150);
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(150);
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(200);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });
  describe('验证回调函数参数', () => {
    test("无参数调用", async () => {
        const cb = jest.fn<() => void>();
        const { result } = renderHook(() => useDebounce(cb, 10));
        act(() => {
          result.current();
        });
        jest.advanceTimersByTime(11);
        expect(cb).toHaveBeenCalledWith();
    });

    test('一个参数调用', () => {
      const cb = jest.fn<(a: string) => void>();
      const { result } = renderHook(() => useDebounce(cb, 10));
      act(() => {
        result.current('a');
      });
      jest.advanceTimersByTime(11);
      expect(cb).toHaveBeenCalledWith('a');
    });

    test('多参数调用', () => {
      const cb = jest.fn<(a: string, b: number, c: boolean ) => void>();
      const { result } = renderHook(() => useDebounce(cb, 10));
      act(() => {
        result.current('a', 1, true);
      });
      jest.advanceTimersByTime(11);
      expect(cb).toHaveBeenCalledWith('a', 1, true);
    });
  })
});


