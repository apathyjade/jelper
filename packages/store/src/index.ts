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
  local: localStorage,
  session: sessionStorage,
}

const getStorage = (type: StorageType = StorageType.local): Storage => storageMap[type];

const getKey = (key: string|undefined, type: StoreType): string => {
  if (type === StoreType.global) {
    if (!key) {
      throw new Error('global key can not be empty');
    }
    return `jelper_g_${key}`;
  }
  return `jelper_p_${location.pathname}${key ? `_${key}` : ''}`;
}

const isExpired = (time: number, expires: number = 0): boolean => (
  !!expires && Date.now() - time > expires
);



export const setValue = <T = any>(key: string, value: T, opt: Options) => {
  const {
    cache = StorageType.local,
    type = StoreType.page,
    expires,
  } = opt || {};
  const storage = getStorage(cache)
  const storageKey = getKey(key, type);
  storage.setItem(storageKey, JSON.stringify({
    expires,
    time: Date.now(),
    value,
  }))
}

export const getValue = <T = any>(key: string, opt: Options) => {
  const {
    cache = StorageType.local,
    type = StoreType.page,
  } = opt || {};
  const storage = getStorage(cache)
  const storageKey = getKey(key, type);
  const value = storage.getItem(storageKey);
  if (typeof value !== 'string') {
    return undefined;
  }
  try {
    const data = JSON.parse(value) as unknown as StorageValue<T>;
    if (isExpired(data.time, data.expires)) {
      storage.removeItem(storageKey);
      return undefined
    } else if (data.expires) {
      setValue(key, data.value, { expires: data.expires});
    }
    return data.value;
  } catch(e) {
    return undefined;
  }
}

export const remove = (key: string, opt: Options) => {
  const {
    cache = StorageType.local,
    type = StoreType.page,
  } = opt || {};
  const storage = getStorage(cache)
  const storageKey = getKey(key, type);
  storage.removeItem(storageKey);
}

export const clear = (opt: Options) => {
  const {
    cache = StorageType.local,
  } = opt || {};
  const storage = getStorage(cache);
  storage.clear();
}
