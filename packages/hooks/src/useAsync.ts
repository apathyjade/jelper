
import { useState } from 'react';
import useRtCb from './useRtCb';
import useCreate from './useCreate';
import useAsyncCb from './useAsyncCb';

type Parameter<T extends (p: any) => any> = Parameters<T>[0]

interface Opt<T extends (p: any) => any, R> {
  defParam?: Parameter<T>;
  immediate?: boolean;
  format?: (p: ReturnType<T>) => R;
  catchParam?: boolean;
}

const defOpt = {
  immediate: false,
  catchParam: false,
}

const useAsync = <T extends (...p: any) => Promise<any>, R extends Object>(
  asyncFn: T,
  opt: Opt<T, R> = defOpt
) => {
  const [data, setData] = useState<R>();
  const [param, setParam] = useState<Partial<Parameter<T>>>(opt.defParam || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const asyncCb = useAsyncCb(asyncFn);

  const run = useRtCb((runParam?: Partial<Parameter<T>>) => {
    const currParam = opt.catchParam ? {
      ...param,
      ...(runParam || {}),
    } : runParam;
    setLoading(true);
    setError(undefined);
    return asyncCb(currParam)
      .then((resData) => {
        setData(opt.format ? opt.format(resData) : resData);
        setParam(currParam as any);
        setLoading(false);
      }, (err) => {
        setError(err);
        setLoading(false);
      });
  })
  useCreate(() => {
    if (opt.immediate) {
      run(param);
    }
  });
  return [run, { data, loading, error }];
};

export default useAsync;
