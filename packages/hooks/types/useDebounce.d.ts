import { DebounceSettings, DebouncedFunc } from 'lodash-es';
declare const useDebounce: <T extends (...args: any) => any>(cb: T, wait?: number, opts?: DebounceSettings) => DebouncedFunc<T>;
export default useDebounce;
