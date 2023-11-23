
import useSafeState from './useSafeState';
import useRtCb from './useRtCb';
import useCreate from './useCreate';

interface Opt<T extends (...arg: any) => any, R> {
  defParam?: Parameters<T>;
  immediate?: boolean;
  format?: (p: ReturnType<T>) => R;
  catchParam?: boolean;
}

const useAsync = <
  T extends (...arg: any) => any,
  R extends Object
>(asyncFn: T, opt: Opt<T, R> = {
  immediate: false,
  catchParam: false,
}) => {
  const [data, setData] = useSafeState(null);
  const [param, setParam] = useSafeState(opt.defParam || {});
  const [loading, setLoading] = useSafeState(false);
  const [error, setError] = useSafeState(null);

  const run = useRtCb((runParam: Partial<Parameters<T>>) => {
    const currParam = opt.catchParam ? {
      ...param,
      ...runParam,
    } : runParam;
    setLoading(true);
    setError(null);
    return asyncFn(currParam)
      .then(opt.format)
      .then((resData) => {
        setData(resData);
        setParam(currParam);
      }, setError)
      .finally(() => {
        setLoading(false)
      })
  })
  useCreate(() => {
    if (opt.immediate) {
      run(param);
    }
  });
  return { data, run, loading, error }
};
export default useAsync;
