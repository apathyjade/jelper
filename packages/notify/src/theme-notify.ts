

import { buildNotify } from './base-notify';
import type { Notify } from './base-notify';

export type Theme = 'light' | 'dark';
export let buildThemeNotify = (): Notify<Theme> => {
  let notifyApi = buildNotify<Theme>();

  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return notifyApi;
  }
  let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (ev: MediaQueryListEvent) => {
    notifyApi.notify(ev.matches ? 'dark' : 'light');
  };

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleChange);
  } else {
    // 旧版 Safari 使用 addListener
    mediaQuery.addListener(handleChange);
  }

  return {
    ...notifyApi,
    destroy: () => {
      notifyApi.destroy();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // 旧版 Safari 使用 removeListener
        mediaQuery.removeListener(handleChange);
      }
      mediaQuery = null as any;
    }
  };
};
