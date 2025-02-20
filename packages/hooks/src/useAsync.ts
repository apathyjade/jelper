
import useSafeState from './useSafeState';
import useRtCb from './useRtCb';
import useCreate from './useCreate';

type Parameter<T extends (p: any) => any> = Parameters<T>[0]

interface Opt<T extends (p: any) => any, R> {
  defParam?: Parameter<T>;
  immediate?: boolean;
  format?: (p: ReturnType<T>) => R;
  catchParam?: boolean;
}

const useAsync = <
  T extends (p: any) => Promise<any>,
  R extends Object
>(asyncFn: T, opt: Opt<T, R> = {
  immediate: false,
  catchParam: false,
}) => {
  const [data, setData] = useSafeState<R|null|undefined>(null);
  const [param, setParam] = useSafeState<Partial<Parameter<T>>|undefined>(opt.defParam || {});
  const [loading, setLoading] = useSafeState(false);
  const [error, setError] = useSafeState(null);

  const run = useRtCb((runParam?: Partial<Parameter<T>>) => {
    const currParam = opt.catchParam ? {
      ...param,
      ...(runParam || {}),
    } : runParam;
    setLoading(true);
    setError(null);
    return asyncFn(currParam)
      .then(opt.format)
      .then((resData) => {
        setData(resData);
        setParam(currParam as any);
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
