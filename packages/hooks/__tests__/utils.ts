import { afterEach, beforeEach, jest } from "@jest/globals";

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

export const openFakeTimers = () => {
  beforeEach(() => {
    // 启用假定时器
    jest.useFakeTimers();
  });
  afterEach(() => {
    // 每个测试后恢复真实定时器
    jest.useRealTimers();
  });
}
