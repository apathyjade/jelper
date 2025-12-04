import {afterEach, beforeEach, describe, expect, jest, test} from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import useResizeObserver, { useResizeObserverHandler } from '../src/useResizeObserver';
import { useEffect } from 'react';

describe('useResizeObserver', () => {
  let resizeObserverInstance: any = null;
  let mockElement: any = document.createElement('div');

  beforeEach(() => {
    global.ResizeObserver = (jest.fn().mockImplementation(function(callback: any) {
      resizeObserverInstance = resizeObserverInstance ?? {
        callback,
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
        trigger: (entries: any[]) => callback(entries, resizeObserverInstance),
      };
      return resizeObserverInstance;
    })) as unknown as any;
  });
  afterEach(() => {
    resizeObserverInstance = undefined;
    mockElement = undefined;
  });
  describe('验证参数', () => {
    test("dom", async () => {
      const callback = jest.fn();
      const ref = { current: mockElement };
      const { result } = renderHook(() => {
        return useResizeObserver(ref, callback);
      });

      await act(() => {
        resizeObserverInstance.trigger([{
          contentRect: { width: 400, height: 300 },
          target: mockElement
        }]);
      });
      expect(callback).toHaveBeenCalledTimes(1);
      result.current();

      ref.current = null;
      renderHook(() => {
        useResizeObserver(ref, callback);
      });
      await act(() => {
        resizeObserverInstance.trigger([{
          contentRect: { width: 400, height: 300 },
          target: mockElement
        }]);
      });
      expect(callback).toHaveBeenCalledTimes(1);

    });
  });
  describe('异常参数', () => {
    test('useResizeObserverHandler 无dom', () => {
      const callback = jest.fn();
      const ref = { current: null };
      renderHook(() => {
        const [bind, unbind] = useResizeObserverHandler()
        useEffect(() => {
          bind(ref.current as any, callback);
          return () => {
            unbind(ref.current as any);
          };
        })
      });
      expect(callback).toHaveBeenCalledTimes(0);
    });
    test('无绑定，直接解绑', () => {
      const callback = jest.fn();
      const ref = { current: null };
      renderHook(() => {
        const [_, unbind] = useResizeObserverHandler()
        useEffect(() => {
          return () => {
            unbind(ref.current as any);
          };
        })
      });
      expect(callback).toHaveBeenCalledTimes(0);
    });
  });
  test('验证初始化', async() => {
    jest.resetModules();
    const { useResizeObserverHandler } = await import('../src/useResizeObserver');

    // const callback = jest.fn();
    const ref = { current: null };
    renderHook(() => {
      const [bind, unbind] = useResizeObserverHandler()
      useEffect(() => {
        unbind(ref.current as any);
      }, [])
      return bind;
    });
  })
});
