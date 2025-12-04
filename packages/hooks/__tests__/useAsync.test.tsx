import {describe, expect, jest, test} from '@jest/globals';
import { renderHook, waitFor, act } from '@testing-library/react';
import useAsync from '../src/useAsync';

describe('useAsync', () => {
  describe("验证 返回值", () => {
    test("数据流转", async() => {
      let resolveFetch: (value: number) => void = null as any;
      const fetchPromise = new Promise<number>(resolve => {
        resolveFetch = resolve;
      });
      const mockFetcher = jest.fn<() => Promise<number>>().mockImplementation(() => fetchPromise);
      const { result, unmount } = renderHook(() => useAsync(mockFetcher));
      expect(result.current[0]).toBeUndefined();
      expect(result.current[1].loading).toBe(false);
      expect(result.current[1].error).toBeUndefined();
      expect(result.current[1].controller).toBeUndefined();

      await act(async () => {
        result.current[1].run();
      });

      await waitFor(() => {
        expect(result.current[0]).toBeUndefined();
        expect(result.current[1].loading).toBe(true);
        expect(result.current[1].error).toBeUndefined();
        expect(result.current[1].controller instanceof AbortController).toBe(true);
      });

      resolveFetch(1);

      await waitFor(() => {
        expect(result.current[0]).toBe(1);
        expect(result.current[1].loading).toBe(false);
        expect(result.current[1].error).toBeUndefined();
        expect(result.current[1].controller).toBeUndefined();
      });

      unmount();

      await act(async () => {
        result.current[1].run();
      });

    });
    test("验证 useAsync refresh", async() => {
      const mockFetcher = jest.fn<() => Promise<number>>().mockResolvedValue(1);
      const { result, unmount } = renderHook(() => useAsync(mockFetcher));

      await act(async () => {
        result.current[1].refresh();
      });

      await waitFor(() => {
        expect(result.current[0]).toBe(1);
      });
      unmount();
    });
    test("验证 useAsync error", async() => {
      const mockFetcher = jest.fn<() => Promise<number>>().mockRejectedValue(new Error('报错了'));
      const { result, unmount } = renderHook(() => useAsync(mockFetcher));

      await act(async () => {
        result.current[1].run();
      });

      await waitFor(() => {
        expect(result.current[1].error?.message).toBe('报错了');
      });
      unmount();
    });
  });
  describe("验证 返回值", () => {
    test("验证 useAsync immediate 配置", async() => {
      const mockFetcher = jest.fn<() => Promise<number>>().mockResolvedValue(1);
      const { result, unmount } = renderHook(() => useAsync(mockFetcher, { immediate: true }));
      expect(result.current[0]).toBeUndefined();
      await waitFor(() => {
        expect(result.current[0]).toBe(1);
      });
      unmount();
    });

    test("验证 useAsync format 配置", async() => {
      const mockFetcher = jest.fn<() => Promise<number>>().mockResolvedValue(1);
      const { result, unmount } = renderHook(() => useAsync(mockFetcher, { immediate: true, format: (data) => !!data ? true : false }));
      await waitFor(() => {
        expect(result.current[0]).toBe(true);
      });
      unmount();
    });
  });
  describe('相关 => abort', () => {
    test("验证参数", async() => {
      const mockFetcher = jest.fn<(params?: { a: number, b: boolean, c: string }) => Promise<number>>().mockResolvedValue(1);
      const { result, unmount } = renderHook(() => useAsync(mockFetcher, { defParam: { c: 'test' }, catchParam: true }));
      expect(result.current[1].param).toEqual({c: 'test'});

      await act(async () => {
        result.current[1].run({ a: 12, b: true, c: 'test' });
      });

      await waitFor(() => {
        expect(result.current[1].param).toEqual({ a: 12, b: true, c: 'test' });
      });

      await act(async () => {
        result.current[1].run({ a: 15 });
      });

      await waitFor(() => {
        expect(result.current[1].param).toEqual({ a: 15, b: true, c: 'test' });
      });
      unmount();
    });
  });
  describe('验证 abort', () => {

    test("验证 useAsync onAbort", async() => {
      let resolveFetch: (value: number) => void = null as any;
      const fetchPromise = new Promise<number>((resolve) => {
        resolveFetch = resolve;
      });
      const mockFetcher = jest.fn<() => Promise<number>>().mockImplementation(() => fetchPromise);
      let onAbort = jest.fn();
      const { result, unmount } = renderHook(() => useAsync(mockFetcher, { onAbort }));

      await act(async () => {
        result.current[1].run();
      });

      await waitFor(() => {
        expect(result.current[1].controller instanceof AbortController).toBe(true);
      });

      await act(async () => {
        result.current[1].controller?.abort();
      });

      await act(async () => {
        resolveFetch(1);
      });

      await waitFor(() => {
        expect(onAbort).toHaveBeenCalled();
        expect(result.current[0]).toBeUndefined();
      });
      await act(async () => {
        result.current[1].run();
      });
      unmount();
    });

    test("验证 useAsync onAbort", async() => {
      let rejectFetch: (reason: Error) => void = null as any;
      const fetchPromise = new Promise<number>((_, reject) => {
        rejectFetch = reject;
      });
      const mockFetcher = jest.fn<() => Promise<number>>().mockImplementation(() => fetchPromise);
      let onAbort = jest.fn();
      const { result, unmount } = renderHook(() => useAsync(mockFetcher, { onAbort }));

      await act(async () => {
        result.current[1].run();
      });
      expect(result.current[1].controller instanceof AbortController).toBe(true);
      await act(async () => {
        result.current[1].controller?.abort();
      });
      expect(result.current[1].controller instanceof AbortController).toBe(true);

      rejectFetch(new Error());
      await act(async () => {
        result.current[1].run();
      });
      unmount();
    });
  });
  describe('验证 卸载逻辑', () => {
    test("卸载后 resolve", async() => {
      let resolveFetch: (value: number) => void = null as any;
      const fetchPromise = new Promise<number>(resolve => {
        resolveFetch = resolve;
      });
      const mockFetcher = jest.fn<() => Promise<number>>().mockImplementation(() => fetchPromise);
      const { result, unmount } = renderHook(() => useAsync(mockFetcher, { immediate: true }));
      unmount();
      resolveFetch(1);
      expect(result.current[0]).toBeUndefined();
    });
    test("卸载后 reject", async() => {
      let rejectFetch: (reason: Error) => void = null as any;
      const fetchPromise = new Promise<number>((_, reject) => {
        rejectFetch = reject;
      });
      const mockFetcher = jest.fn<() => Promise<number>>().mockImplementation(() => fetchPromise);
      const { result, unmount } = renderHook(() => useAsync(mockFetcher, { immediate: true }));
      unmount();
      rejectFetch(new Error('error'));
      expect(result.current[1].error).toBeUndefined();
    });
  });
});


