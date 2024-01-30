

export default class CallbackCache<T extends Function> {
  value: T[];
  constructor() {
    this.value = [];
  }
  add(cb: T) {
    if (this.value.indexOf(cb) !== -1) {
      this.value = [ ...this.value, cb ];
    }
  }
  delete(cb: Function) {
    this.value = this.value.filter((item) => item !== cb);
  }
  clear() {
    this.value = [];
  }
  dispose() {
    this.clear();
    this.value = null;
  }
}
