
const store: { [prop: string]: Function[]} = {};
let index = 0;

const useGetter = (key: string) => () => {
  if (!store[key]) {
    store[key] = [];
  }
  return store[key];
}

const useClear = (key: string) => () => {
  delete store[key]
}

export default function useCbCache() {
  const key = `_${index++}`;
  const getter = useGetter(key);
  const clear = useClear(key);
  return {
    call(data) {
      getter().forEach((cb) => cb(data));
    },
    callLikeOnion(ctx: any) {
      const cbs = getter();
      if (!cbs.length) {
        return ctx
      }

      cbs.reduce(
        (p, cb) => (n) => p(
          // next
          (value) => cb(ctx, n, value)
        ),
        (next) => next(ctx),
      )(ctx => ctx);
    },


    add(cb: Function) {
      if (!store[key]) {
        store[key] = [cb];
        return;
      }
      if (store[key].indexOf(cb) !== -1) {
        store[key].push(cb)
      }
    },
    delete(cb: Function) {
      if (store[key]) {
        store[key] = store[key].filter(item => item !== cb);
        if (store[key].length === 0) {
          clear();
        }
      }
    },
    clear,
  }
}
