
import useSafeState from "./useSafeState";
import useRtCb from "./useRtCb";

const usePromiseState = <T = any>(cb: T, opts) => {
  const fn = useRtCb(cb as Function);
  const [params, setParams] = useSafeState(opts?.defParams);
  const [loading, setLoading] = useSafeState(false);
  const [error, setError] = useSafeState(null);
  const run = useRtCb((runParams) => {
    const currParams = {
      ...params,
      ...runParams,
    }
    setLoading(true)
    return cb(currParams).then((res) => {

    }).then(() => {
      setParams(currParams);
    }, setError).finally(() => {
      setLoading(false)
    })
  })
  return {
    loading,
    error
  }
};

export default usePromiseState;
