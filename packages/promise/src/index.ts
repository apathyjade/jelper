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
