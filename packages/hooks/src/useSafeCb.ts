import { useState, useCallback } from 'react';
import useIsUnmount from './useIsUnmount';

const useSafeCb = (cb: Function, deps: any[] = [])  => {
    const isUnmount = useIsUnmount();
    return useCallback((...arg) => {
        console.log('useSafeCb', !isUnmount())
        if (!isUnmount()) {
            cb(...arg)
        }
    }, deps);
}
export default useSafeCb;
