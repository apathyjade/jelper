
type Unsubscribe = () => void;

export default <T = void>() => {
  const listeners = new Set<(data: T) => void>();

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

    clear: () => {
      listeners.clear();
    }
  };
}
