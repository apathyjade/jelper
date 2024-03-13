/**
 * 使用定时器在指定延迟后执行回调函数
 * @param callback - 回调函数
 * @param delay - 延迟时间（毫秒）
 * @returns clearTimer - 清除定时器的函数
 */
declare const useTimeout: (callback: DefFn, delay: number) => () => void;
export default useTimeout;
