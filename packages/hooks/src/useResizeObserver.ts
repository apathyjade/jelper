/*
 * @Author: apathyjade
 * @Date: 2023-11-24 10:52:51
 * @Last Modified by: apathyjade
 * @Last Modified time: 2023-11-28 18:16:35
 */

import { useEffect, useState } from 'react';
import useCreate from './useCreate';

let id = null;
let observerProp = null;
let resizeObserver = null;
let observeCatch = null;

function init() {
  if (resizeObserver) {
    return;
  }
  observeCatch = {};
  id = 0;
  observerProp = 'data-observer-id'
  resizeObserver = new window.ResizeObserver(
    (targets) => {
      targets?.forEach((item: any) => {
        const key = item?.target.getAttribute(observerProp);
        observeCatch[key]?.(item?.target);
      });
    },
  );
}

const observe = (target, domIdx, cb) => {
  const key = `${domIdx}`;
  observeCatch[key] = cb;
  target?.setAttribute(observerProp, key);
  resizeObserver.observe(target);
};
const unobserve = (target) => {
  resizeObserver.unobserve(target);
  const key = target.getAttribute(observerProp);
  delete observeCatch[key];
};

export default function useResizeObserver (dom: HTMLElement, cb: (dom: HTMLElement) => void) {
  useCreate(init);
  const [domId] = useState<number>(id++);
  useEffect(() => {
    observe(dom, domId, cb);
    return () => unobserve(dom);
  }, [dom, cb])
};
