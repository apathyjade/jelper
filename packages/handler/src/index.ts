
type PromiseResult<T extends Promise<any>> = T extends Promise<infer R> ? R : never

export default class Handler<T extends (p: any) => Promise<any>> {
  constructor() {
    this.value = [];
  }
  private value: T[]
  get size(): number {
    return this.value.length;
  }
  on(cb: T) {
    this.value = [ ...this.value, cb ];
  }
  off(cb: T) {
    this.value = this.value.filter((item) => item !== cb);
  }
  clear() {
    this.value = [];
  }
  dispose() {
    this.clear();
    this.value = null;
  }
  call(data: Parameters<T>): Promise<PromiseResult<ReturnType<T>>[]> {
    const cbs = this.value;
    return <Promise<PromiseResult<ReturnType<T>>[]>>Promise.all(cbs.map(async(cb) => await cb(data)));
  }
  callWithRace(data: Parameters<T>): ReturnType<T> {
    const cbs = this.value;
    return <ReturnType<T>>Promise.race(cbs.map(async(cb) => await cb(data)));
  }
}

export const useHandler = () => new Handler();
