/*
 * @Author: apathyjade
 * @Date: 2023-11-24 10:52:51
 * @Last Modified by: apathyjade
 * @Last Modified time: 2024-03-14 16:34:42
 */

import { useEffect } from 'react';
import useSafeCb from './useSafeCb';

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
}

const observe = (target: HTMLElement, cb: (dom: ResizeObserverEntry) => void) => {
  if (!resizeObserver) {
    init();
  }
  observeCatch?.set(target, cb);
  resizeObserver?.observe(target);
};
const unobserve = (target: HTMLElement) => {
  if (!resizeObserver) {
    init();
  }
  resizeObserver?.unobserve(target);
  observeCatch?.delete(target);
};

export default function useResizeObserver (dom: HTMLElement, cb: (dom: ResizeObserverEntry) => void) {
  const selfObserve = useSafeCb(() => {
    observe(dom, cb);
  }, [dom, cb]);
  const selfUnobserve = useSafeCb(() => {
    unobserve(dom);
  }, [dom]);
  useEffect(() => {
    observe(dom, cb);
    return () => unobserve(dom);
  }, [dom, cb]);
  return [selfObserve, selfUnobserve];
};
