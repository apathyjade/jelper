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


