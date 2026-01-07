import React, { type FC, type JSX, memo } from 'react';

type Composer<P extends {}> = (Com: FC<P>) => FC<P>;

interface Opts<P extends {}> {
  builder?: <T extends {} = P>(props: P, Com: FC<T>) => JSX.Element;
}

export const createCtxComposer = <P extends {}, T>(
  useCfgHook: (props: P) => T,
  opts: Opts<P> = {}
) => {
  const { builder } = opts;
  const ComposerCtx = React.createContext<T>({} as any);

  const useComposerCtx = () => {
    return React.useContext<T>(ComposerCtx);
  };
  const buildHooks = <F extends (...arg: any) => any>(cb: (value: T) => F): (...p: Parameters<F>) => ReturnType<F> => {
    return (...p: Parameters<F>): ReturnType<F> => {
      const value = React.useContext<T>(ComposerCtx);
      return cb(value)(...p);
    };
  }; 
  return {
    forwardComposer<U extends {} = P>(Com: FC<U>, propsAreEqual?: (prevProps: Readonly<U>, nextProps: Readonly<U>) => boolean) {
      const MemoCom= memo(Com, propsAreEqual);
      return (props: P) => {
        const value = useCfgHook(props);
        return (
          <ComposerCtx.Provider value={value}>
            {
              builder ? builder(props, MemoCom) : <MemoCom {...props as unknown as U} />
            }
          </ComposerCtx.Provider>
        );
      }
    },
    useComposerCtx,
    buildHooks,
  } as const;
};

export const mergeComposer = <P extends {}>(
  list: Array<Composer<P>>,
): Composer<P> => {
  return (Com: FC<P>): FC<P> => {
    return list.reduce((res, it) => {
      return (props: P) => {
        const CurrCom = it(res);
        return <CurrCom {...props} />;
      };
    }, Com);
  };
};

export default createCtxComposer;
