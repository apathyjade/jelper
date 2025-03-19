
export const buildPromise = <T>(): [
  Promise<T>,
  (value: T) => void,
  (reason?: any) => void
] => {
  let resolve: (value: T) => void = undefined as any;
  let reject: (reason?: any) => void = undefined as any;
  const inc = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject
  });
  //
  return [inc, resolve, reject];
};
