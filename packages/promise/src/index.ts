/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-30 16:43:10
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-30 16:43:10
 */

import { AsyncCompleter } from "readline";

export function toPromise <T>(data: any): Promise<T> {
  if (typeof data === 'function') {
    return toPromise(data());
  }
  if (data instanceof Promise) {
    return data;
  }
  if (data === false) {
    return Promise.reject();
  }
  return Promise.resolve(data);
};

export function buildPromiseHandler<T>(): [Promise<T>, Resolve<T>, Reject] {
  let resolve = null;
  let reject = null;
  const promise = new Promise<T>((r, j) => {
    resolve = r;
    reject = j;
  })
  return [promise, resolve, reject]
}

export function buildCacheAsyncFn<T extends any[] = any[] , R = any>(fn: AsyncFn<T, R>): AsyncFn<T, R> {
  let handlers = [];
  let loading = false;
  let result: Promise<R> = null
  return (...arg) => {
    if (result) {
      return result;
    }
    if (!loading) {
      loading = true;
      fn(...arg).then((data) => {
        handlers.forEach(([resolve, reject]) => resolve(data))
        result = Promise.resolve(data)
      }).catch((error) => {
        handlers.forEach(([resolve, reject]) => reject(error));
        result = Promise.reject(error)
      }).finally(() => {
        loading = false;
        handlers = []
      });
    }
    return new Promise((resolve, reject) => {
      handlers.push([resolve, reject])
    });
  }
}

export function callWithPromise(cb: PromiseCb, data: Parameters<ReturnPromiseFn>[0]) {
  return new Promise((resolve, reject) => {
    cb(data, { resolve, reject });
  })
}

export function toCallPromise<T = any, R = any>(fn: ReturnPromiseFn<T, R>)
: (
    data: T,
    opt: {
      resolve: (d: R) => void,
      reject: Reject
    }
  ) => void
{
  return (data: T, { resolve, reject }) => {
    return fn(data).then(resolve, reject)
  };
}


