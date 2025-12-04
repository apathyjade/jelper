import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import useThrottle from '../src/useThrottle';

describe('useThrottle', () => {
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
      const { result } = renderHook(() => useThrottle(mockFn, 100));
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalledTimes(1);
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
    test("节流", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useThrottle(mockFn, 100));
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(50);
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(50);
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalledTimes(2);
      jest.advanceTimersByTime(50);
      jest.advanceTimersByTime(51);
      expect(mockFn).toHaveBeenCalledTimes(3);
    });
  });
  describe('验证配置', () => {
    test("默认超时时间", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useThrottle(mockFn));
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(10);
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(200);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
    test("设置超时时间", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useThrottle(mockFn, 20));
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(10);
      expect(mockFn).toHaveBeenCalledTimes(1);
      await act(() => {
        result.current();
      });
      jest.advanceTimersByTime(20);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
    test("前导不执行", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useThrottle(mockFn, 200, { leading: false }));
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalledTimes(0);
      jest.advanceTimersByTime(200);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    test("尾不执行", async () => {
      const mockFn = jest.fn();
      const { result } = renderHook(() => useThrottle(mockFn, 200, { leading: true , trailing: false}));
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(100);
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(200);
      await act(() => {
        result.current();
      });
      expect(mockFn).toHaveBeenCalledTimes(2);
      jest.advanceTimersByTime(200);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });
  describe('验证回调函数参数', () => {
    test("无参数调用", async () => {
        const cb = jest.fn<() => void>();
        const { result } = renderHook(() => useThrottle(cb, 10));
        act(() => {
          result.current();
        });
        jest.advanceTimersByTime(11);
        expect(cb).toHaveBeenCalledWith();
    });

    test('一个参数调用', () => {
      const cb = jest.fn<(a: string) => void>();
      const { result } = renderHook(() => useThrottle(cb, 10));
      act(() => {
        result.current('a');
      });
      jest.advanceTimersByTime(11);
      expect(cb).toHaveBeenCalledWith('a');
    });

    test('多参数调用', () => {
      const cb = jest.fn<(a: string, b: number, c: boolean ) => void>();
      const { result } = renderHook(() => useThrottle(cb, 10));
      act(() => {
        result.current('a', 1, true);
      });
      jest.advanceTimersByTime(11);
      expect(cb).toHaveBeenCalledWith('a', 1, true);
    });
  })
});


