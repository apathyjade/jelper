/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-22 16:26:56
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-22 16:26:56
 */

import { Options, StoreType, StorageType, Storage, StorageValue } from './types';

export type {
  Options as StoreOptions,
  StoreType as CacheEnum,
  StorageType as TypeEnum,
}

const { localStorage, sessionStorage, location } = window;

const memory: Storage = (() => {
  let memoryCache: {[p: string]: string} = {};
  return {
    getItem(key: string): string | null {
      return memoryCache?.[key] ?? null;
    },
    setItem(key: string, value: string) {
      memoryCache[key] = value;
    },
    removeItem(key: string) {
      delete memoryCache[key];
    },
    clear() {
      memoryCache = {};
    }
  }
})();

const storageMap: {[prop in StorageType]: Storage} = {
  memory,
  local: localStorage ,
  session: sessionStorage,
}

const getStorage = (type: StorageType = StorageType.memory): Storage => storageMap[type];

const getKey = (key: string|undefined, type: StoreType): string => {
  if (type === StoreType.global) {
    if (!key) {
      throw new Error('global key can not be empty');
    }
    return `jelper_g_${key}`;
  }
  return `jelper_p_${location.pathname}${key ? `_${key}` : ''}`;
}

const isExpired = (time: number, expires: number = 0) => (
  expires && Date.now() - time > expires
);

export class Store<T = any> {
  readonly type: StoreType;
  readonly key: string;
  readonly expires: number;
  private storage: Storage;
  constructor(opts: Options<T>) {
    const {
      expires = 0,
      cache,
      value,
      type = StoreType.page,
      key,
    } = opts;
    this.type = type;
    this.key = getKey(key, type);
    this.storage = getStorage(cache);
    this.expires = expires;
    if (value !== undefined && this.getValue() === undefined) {
      this.setValue(value);
    }
  }
  private getItem() {
    const item = this.storage.getItem(this.key);
    if (typeof item !== 'string') {
      return undefined;
    }
    return JSON.parse(item) as unknown as StorageValue<T>
  }
  private setItem(value: StorageValue) {
    this.storage.setItem(this.key, JSON.stringify(value))
  }
  isExpired() {
    const item = this.getItem();
    return item === undefined || isExpired(item.time, item.expires);
  }
  getValue(): T|undefined {
    const item = this.getItem();
    if (item === undefined || isExpired(item.time, item.expires)) {
      return undefined
    }
    return item.value;
  }
  setValue(value: T) {
    this.setItem({
      key: this.key,
      expires: this.expires,
      time: Date.now(),
      value,
    })
  }
};
