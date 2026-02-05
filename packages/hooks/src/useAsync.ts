
import { useEffect, useState } from 'react';
import useRtCb from './useRtCb';
import useUnmount from './useUnmount';
import useSafeRunner from './useSafeRunner';

type Parameter<T extends (p: any) => any> = Parameters<T>[0]

interface Opt<T extends (p: any) => any, R> {
  defParam?: Partial<Parameter<T>>;
  format?: (p: ReturnType<T>) => R;
  catchParam?: boolean;
  onAbort?: (this: AbortSignal, ev: Event) => any;
}

const defOpt = {
  catchParam: false,
}

const useAsync = <T extends (p: any, opt?: { signal: AbortController['signal'] }) => Promise<any>, R = Awaited<ReturnType<T>>>(
  asyncFn: T,
  opt: Opt<T, R> = { ...defOpt }
): [
  R | undefined,
  {
    run: (runParam?: Partial<Parameter<T>>) => Promise<void>;
    refresh: () => Promise<void>;
    cancel: () => void;
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
  const safeRunner = useSafeRunner();
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

    if (controller) {
      controller.abort();
    }

    const abortController = new AbortController();

    safeRunner(() => {
      setLoading(true);
      setError(undefined);
      setController(abortController);
    });

    return asyncFn(currParam, { signal: abortController.signal })
      .then((resData) => {
        if (abortController.signal.aborted) return;
        safeRunner(() => {
          setData(opt.format ? opt.format(resData) : resData);
          setParam(currParam as any);
        });
      }, (err) => {
        if (abortController.signal.aborted) return;
        safeRunner(() => {
          setError(err);
        });
      }).finally(() => {
        safeRunner(() => {
          setLoading(false);
          setController(undefined);
        });
      });
  });
  const refresh = useRtCb(() => run(param));

  const cancel = useRtCb(() => {
    if (controller) {
      controller.abort();
      safeRunner(() => {
        setController(undefined);
        setLoading(false);
      });
    }
  });

  useUnmount(() => {
    if (controller) {
      controller.abort();
    }
  });
  return [data, { run, refresh, cancel, loading, error, param, controller }];
};

export default useAsync;
