declare const useRtCb: <T extends DefFn, D extends any[]>(cb: T, deps?: D) => ReturnFn<T>;
export default useRtCb;
