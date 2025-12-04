/**
 * @Author: apathyjade
 * @Date: 2025-03-18 23:44:38
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-29 17:58:54
 */

import { useEffect, useState } from 'react';
import useRtCb from './useRtCb';
import useCreate from './useCreate';
import useIsUnmounted from './useIsUnmount';
import useUnmount from './useUnmount';

type Parameter<T extends (p: any) => any> = Parameters<T>[0]

interface Opt<T extends (p: any) => any, R> {
  defParam?: Partial<Parameter<T>>;
  immediate?: boolean;
  format?: (p: ReturnType<T>) => R;
  catchParam?: boolean;
  onAbort?: (this: AbortSignal, ev: Event) => any;
}

const defOpt = {
  immediate: false,
  catchParam: false,
}

const useAsync = <T extends (p: any, opt?: { signal: AbortController['signal'] }) => Promise<any>, R = any>(
  asyncFn: T,
  opt: Opt<T, R> = { ...defOpt }
): [
  R | undefined,
  {
    run: (runParam?: Partial<Parameter<T>>) => Promise<void>;
    refresh: () => Promise<void>;
    loading: boolean;
    error?: Error;
    param: Partial<Parameter<T>>;
    controller: AbortController|undefined;
  }
] => {
  const [data, setData] = useState<R | undefined>(undefined);
  const [param, setParam] = useState<Partial<Parameter<T>>>(opt.defParam || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [controller, setController] = useState<AbortController>();
  const isUnmounted = useIsUnmounted();

  useEffect(() => {
    if (!controller || !opt.onAbort) {
      return;
    }
    const onAbort = opt.onAbort
    controller.signal.addEventListener('abort', onAbort);
    return () => {
      controller.signal.removeEventListener('abort', onAbort);
    }
  }, [controller]);

  const run = useRtCb((runParam: Partial<Parameter<T>> = {}) => {
    const currParam = opt.catchParam ? {
      ...param,
      ...runParam,
    } : runParam;
    setLoading(true);
    setError(undefined);

    if (controller) {
      controller.abort();
    }

    const abortController = new AbortController();
    setController(abortController);

    return asyncFn(currParam, { signal: abortController.signal })
      .then((resData) => {
        if (isUnmounted() || abortController.signal.aborted) return;
        setData(opt.format ? opt.format(resData) : resData);
        setParam(currParam as any);
      }, (err) => {
        if (isUnmounted() || abortController.signal.aborted) return;
        setError(err);
      }).finally(() => {
        if (isUnmounted()) return;
        setLoading(false);
        setController(undefined);
      });
  });
  const refresh = useRtCb(() => run(param));
  useCreate(() => {
    if (opt.immediate) {
      run(param);
    }
  });
  useUnmount(() => {
    if (controller) {
      controller.abort();
    }
  });
  return [data, { run, refresh, loading, error, param, controller }];
};

export default useAsync;
