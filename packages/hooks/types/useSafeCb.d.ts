declare const useSafeCb: <T extends DefFn, D extends any[]>(cb: T, deps?: D) => T;
export default useSafeCb;
