
import useSafeState from "./useSafeState";
import useRtCb from "./useRtCb";
import { useState } from "react";

interface Opts<T extends (...arg: any) => any, R> {
  defParams: Parameters<T>;
  format: (p: ReturnType<T>) => R;
}

const useAsync = <
  T extends (...arg: any) => any,
  R extends Object
>(cb: T, opts: Opts<T, R>) => {

  const [data, setData] = useSafeState(null);
  const [params, setParams] = useSafeState(opts?.defParams);
  const [loading, setLoading] = useSafeState(false);
  const [error, setError] = useSafeState(null);
  const run = useRtCb((runParams) => {
    const currParams = {
      ...params,
      ...runParams,
    }
    setLoading(true)
    return cb(currParams).then(opts?.format).then((resData) => {
      setData(resData);
      setParams(currParams);
    }, setError).finally(() => {
      setLoading(false)
    })
  })
  return {
    data,
    run,
    loading,
    error
  }
};

export default useAsync;
