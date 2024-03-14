export declare function toPromise<T>(data: any): Promise<T>;
export declare function callLikeSerial<T extends AsyncFn>(cbs: T[]): Promise<any>;
export declare function buildPromiseHandler<T>(): [Promise<T>, Resolve<T>, Reject];
export declare function buildCacheAsyncFn<T extends any[] = any[], R = any>(fn: AsyncFn<T, R>): AsyncFn<T, R>;
