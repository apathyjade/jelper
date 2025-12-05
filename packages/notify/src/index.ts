
type Unsubscribe = () => void;

export default <T = void>() => {
  const listeners = new Set<(data: T) => void>();

  return {
    /**
     * 发送通知（单向，fire-and-forget）
     */
    notify: (data: T) => {
      listeners.forEach(fn => fn(data));
    },

    /**
     * 订阅通知
     */
    on: (callback: (data: T) => void): Unsubscribe => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },

    // 可选：一次性监听
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
