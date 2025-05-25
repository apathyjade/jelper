import React, { FC, useMemo } from 'react';

type Composer<P> = (Com: FC<P>) => FC<P>;

export const createCtxComposer = <P extends React.JSX.IntrinsicAttributes, T>(useCfgHook: (props: P) => T): {
  forwardComposer: (Com: FC<P>) => FC<P>;
  useComposerCtx: () => T;
} => {
  const ComposerCtx = React.createContext<T>({} as any);
  return {
    forwardComposer: (Com: FC<P>): FC<P> => (props: P) => {
      const value = useCfgHook(props);
      return (
        <ComposerCtx.Provider value={value}>
          {useMemo(() => <Com {...props} />, [props])}
        </ComposerCtx.Provider>
      );
    },
    useComposerCtx() {
      return React.useContext<T>(ComposerCtx);
    },
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
