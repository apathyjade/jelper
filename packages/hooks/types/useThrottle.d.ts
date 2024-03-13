import { ThrottleSettings } from 'lodash-es';
/**
 * 用于节流函数的钩子函数
 * @param cb - 要节流的函数
 * @param wait - 节流延迟时间，默认为0
 * @param opts - 节流选项对象，默认为{}
 * @returns 节流函数
 */
declare const useThrottle: <T extends (...args: any) => any>(cb: T, wait?: number, opts?: ThrottleSettings) => import("lodash-es").DebouncedFunc<(...arg: Parameters<T>) => void>;
export default useThrottle;
