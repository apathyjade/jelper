/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-30 16:43:10
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-30 16:43:10
 */

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

export function usePromise<T>(): [Resolve<T>, Reject, Promise<T>] {
  let resolve = null;
  let reject = null;
  const p = new Promise<T>((r, j) => {
    resolve = r;
    reject = j;
  })
  return [resolve, reject, p]
}

export function callWithPromise<T = any, R = any>(cb: PromiseCb<T, R>, data: R) {
  return new Promise((resolve, reject) => {
    cb(data, { resolve, reject });
  })
}

