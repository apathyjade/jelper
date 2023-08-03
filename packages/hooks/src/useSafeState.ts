
import { useState, useCallback } from 'react';
import useIsUnmount from './useIsUnmount';

const useSafeState = <T>(value?: T): [
    s: T,
    setFn: React.Dispatch<React.SetStateAction<T>>,
] => {
    const [state, setState] = useState<T|undefined>(value);
    const isUnmount = useIsUnmount();
    const setCb =  useCallback((newVal) => {
        if (!isUnmount()) {
            setState(newVal)
        }
    }, [])
    return [state, setCb];
}
export default useSafeState;