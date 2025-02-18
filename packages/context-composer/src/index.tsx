import React from 'react';

export const createCtxComposer = <P extends React.JSX.IntrinsicAttributes, T>(useCfgHook: (props: P) => T) => {
  const ComposerCtx = React.createContext<T>({} as any);
  return {
    forwardComposer: (Com: (props: P) => React.ReactNode): (props: P) => React.ReactNode => (props: P) => {
      const value = useCfgHook(props);
      return (
        <ComposerCtx.Provider value={value}>
          <Com {...props} />
        </ComposerCtx.Provider>
      );
    },
    useComposerCtx() {
      return React.useContext(ComposerCtx);
    },
  };
};

export const mergeComposer = <P extends React.JSX.IntrinsicAttributes>(
  list: Array<(Com: (props: P) => React.ReactNode) =>(props: P) => React.ReactNode>,
  Com: (props: P) => React.ReactNode
): (props: P) => React.ReactNode => {
  return list.reduce((res, it) => {
    return (props: P) => {
      const CurrCom = it(res);
      return <CurrCom {...props} />
    };
  }, Com)
}
