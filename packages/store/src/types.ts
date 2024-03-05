/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-22 16:44:40
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-22 16:44:40
 */

export enum StorageType {
  memory = 'memory',
  session = 'session',
  local = 'local',
}
export enum StoreType {
  global = 'global',
  page = 'page',
}

export interface Storage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

export interface Options<T = any> {
  expires?: number,
  cache?: StorageType,
  type?: StoreType,
  // value?: T,
  // key?: string,
}

export interface StorageValue<T = any> {
  key: string,
  time: number,
  expires: number,
  value: T,
}
