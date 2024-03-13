interface Opt<T extends (...arg: any) => any, R> {
    defParam?: Parameters<T>;
    immediate?: boolean;
    format?: (p: ReturnType<T>) => R;
    catchParam?: boolean;
}
declare const useAsync: <T extends (...arg: any) => Promise<any>, R extends Object>(asyncFn: T, opt?: Opt<T, R>) => {
    data: any;
    run: ReturnFn<(runParam: Partial<Parameters<T>>) => Promise<void>>;
    loading: boolean;
    error: any;
};
export default useAsync;
