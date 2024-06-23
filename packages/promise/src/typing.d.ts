/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2023-04-27 00:03:33
 * @Last Modified by:   jade
 * @Last Modified Time: 2023-04-27 00:03:33
 */

type Resolve<T = any> = (value: T) => void;
type Reject<T = Error> = (reason?: T) => void;
type AsyncFn<T extends any[] = any[], R = any> = (...args: T) => Promise<R>;

type PromiseCb<T = any, R = any> = (
  data: R,
  opts: {
    resolve: Resolve<T>;
    reject: Reject<Error>
  }
) => void

type ReturnPromiseFn<T = any, R = any> = (data: T) => Promise<R>;
