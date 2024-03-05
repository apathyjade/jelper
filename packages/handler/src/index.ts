
type PromiseResult<T extends Promise<any>> = T extends Promise<infer R> ? R : never
type DefCb = (p: any) => Promise<any>;

export class MultipleHandler<T extends DefCb> {
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
    if (cb) {
      this.value = this.value.filter((item) => item !== cb);
    } else {
      this.value = [];
    }
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

export class SingleHandler<T extends DefCb> {
  private value: T
  on(cb: T) {
    if (this.value) {
      console.warn('handler is already exist');
    }
    if (typeof cb !== 'function') {
      throw new Error('handler must be function');
    }
    this.value = cb;
  }
  off() {
    this.value = null;
  }
  call(data: Parameters<T>): ReturnType<T> {
    if (!this.value) {
      return Promise.reject(new Error('handler is not exist')) as ReturnType<T>;
    }
    return Promise.resolve(this.value(data)) as ReturnType<T>;
  }
}

export const useSingleHandler: <T extends DefCb>() => SingleHandler<T> = () => new SingleHandler();
export const useMultipleHandler: <T extends DefCb>() => MultipleHandler<T> = () => new MultipleHandler();

export default MultipleHandler;
