/*
 * @Author: apathyjade
 * @Date: 2023-11-24 10:52:51
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-30 14:35:56
 */

import { useCallback, useEffect } from 'react';

let resizeObserver: ResizeObserver|null = null;
let observeCatch: Map<HTMLElement, Function>|null = null;


function init() {
  if (resizeObserver) {
    return;
  }
  observeCatch = new Map();
  resizeObserver = new window.ResizeObserver(
    (targets) => {
      targets?.forEach((item: any) => {
        observeCatch?.get(item?.target)?.(item);
      });
    },
  );
};

const observe = (target: HTMLElement, cb: (dom: ResizeObserverEntry) => void) => {
  if (!resizeObserver) {
    init();
  }
  if (!target) {
    return;
  }
  observeCatch?.set(target, cb);
  resizeObserver?.observe(target);
};
const unobserve = (target: HTMLElement) => {
  if (!resizeObserver) {
    init();
  }
  if (!target) {
    return;
  }
  resizeObserver?.unobserve(target);
  observeCatch?.delete(target);
};

export const useResizeObserverHandler = () => {
  return [observe, unobserve];
};

export const useResizeObserver = <T extends HTMLElement >(domRef: React.RefObject<T>, cb: (entry: ResizeObserverEntry) => void) => {
  const selfUnobserve = useCallback(() => {
    if (domRef.current) {
      unobserve(domRef.current);
    }
  }, [domRef.current]);
  useEffect(() => {
    if (!domRef.current) return;
    const dom = domRef.current
    observe(dom, cb);
    return () => unobserve(dom);
  }, [domRef.current, cb]);
  return selfUnobserve;
};

export default useResizeObserver;
