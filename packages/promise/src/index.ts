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

export function callLikeSerial<T extends AsyncFn>(cbs: T[]): Promise<any> {
  return cbs.reduce((p, cb) => p.then(cb), Promise.resolve());
}

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
        handlers.forEach(([resolve, _]) => resolve(data))
        result = Promise.resolve(data)
      }).catch((error) => {
        handlers.forEach(([_, reject]) => reject(error));
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
