

type DefFn = (...arg: any) => any;
type ReturnFn<T extends DefFn> = (...arg: Parameters<T>) => ReturnType<T>
