import React, { FC, memo } from 'react';

type Composer<P> = (Com: FC<P>) => FC<P>;

export const createCtxComposer = <P extends React.JSX.IntrinsicAttributes, T>(
  useCfgHook: (props: P) => T
): {
  forwardComposer: (Com: FC<P>) => FC<P>;
  useComposerCtx: () => T;
  buildHooks: <F extends (...arg: any) => any>(cb: (value: T) => F) => (...p: Parameters<F>) => ReturnType<F>;
  ComposerCtx: React.Context<T>;
} => {
  const ComposerCtx = React.createContext<T>({} as any);
  return {
    forwardComposer: (Com: FC<P>, propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean): FC<P> => {
      const MemoCom = memo(Com, propsAreEqual)
      return (props: P) => {
        const value = useCfgHook(props);
        return (
          <ComposerCtx.Provider value={value}>
            <MemoCom {...props} />
          </ComposerCtx.Provider>
        );
      }
    },
    useComposerCtx() {
      return React.useContext<T>(ComposerCtx);
    },
    buildHooks<F extends (...arg: any) => any>(cb: (value: T) => F): (...p: Parameters<F>) => ReturnType<F> {
      return (...p: Parameters<F>): ReturnType<F> => {
        const value = React.useContext<T>(ComposerCtx);
        return cb(value)(...p);
      };
    },
    ComposerCtx,
  };
};

export const mergeComposer = <P extends React.JSX.IntrinsicAttributes>(
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
