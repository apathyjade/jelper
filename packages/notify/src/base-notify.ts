
type Unsubscribe = () => void;

export interface Notify<T> {
    notify: (data: T) => void;
    on: (callback: (data: T) => void) => Unsubscribe;
    once: (callback: (data: T) => void) => Unsubscribe;
    destroy: () => void;
}

export const buildNotify = <T = void>(): Notify<T> => {
  let listeners = new Set<(data: T) => void>();

  return {
    notify: (data: T) => {
      listeners.forEach(fn => fn(data));
    },

    on: (callback: (data: T) => void): Unsubscribe => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },

    once: (callback: (data: T) => void): Unsubscribe => {
      const handler = (data: T) => {
        callback(data);
        listeners.delete(handler);
      };
      listeners.add(handler);
      return () => listeners.delete(handler);
    },

    destroy: () => {
      listeners.clear();
    }
  };
}
