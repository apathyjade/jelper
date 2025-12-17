
type Token = string | symbol;

export type Provider<T = any> = {
  token: Token;
  type: string;
  useValue?: T;
  useFactory?: (...arg: any[]) => T;
}

export type Require = {
  token: Token;
  type: string;
}

const provideTypeMap = new Map<Token, Provider>();
const relations = new Map<Token, Provider>();

export const setProvide = <T>(provider: Provider<T>): void => {
  if (provideTypeMap.has(provider.type)) {
    window.queueMicrotask(() => {
      throw new Error(`Provider had set: ${provider.type}`);
    });
  }
  provideTypeMap.set(provider.type, provider);
}

export const removeProvide = (type: string): void => {
  provideTypeMap.delete(type);
}

export const reletion = (require: Require, provider: Provider) => {
  relations.set(require.token, provider)
}

export const removeRelation = (require: Require) => {
  relations.delete(require.token);
}

export const getProvide = <T>(require: Require, ...args: any[]): T | undefined => {
  const provide = relations.get(require.token) || provideTypeMap.get(require.type);
  if (!provide) {
    throw new Error(`No provider of type: ${require.type}`);
  }
  if (provide.useValue) {
    return provide.useValue as T;
  }
  if (provide.useFactory) {
    return provide.useFactory(...args) as T;
  }

  throw new Error(`Provider is damaged: ${String(provide.token)}`);
}
