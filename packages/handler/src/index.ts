
import CallbackCache from './CallbackCache';

type PromiseResult<T extends Promise<any>> = T extends Promise<infer R> ? R : never

export default class Handler<T extends (p: any) => Promise<any>> {
  cache: CallbackCache<T>;
  constructor() {
    this.cache = new CallbackCache();
  }
  on(cb: T) {
    this.cache.add(cb);
  }
  off(cb: T) {
    this.cache.delete(cb);
  }
  dispose() {
    this.cache.clear();
    this.cache = null;
  }
  call(data: Parameters<T>): Promise<PromiseResult<ReturnType<T>>[]> {
    const cbs = this.cache.value;
    return <Promise<PromiseResult<ReturnType<T>>[]>>Promise.all(cbs.map(async(cb) => await cb(data)));
  }
  callWithRace(data: Parameters<T>): ReturnType<T> {
    const cbs = this.cache.value;
    return <ReturnType<T>>Promise.race(cbs.map(async(cb) => await cb(data)));
  }
}
