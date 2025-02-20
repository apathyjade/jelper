
import { useState } from 'react';
import useSafeCb from './useSafeCb';

const useSafeState = <T>(value?: T): [
    s: T,
    setFn: React.Dispatch<React.SetStateAction<T>>,
] => {
    const [state, setState] = useState<T>(value as T);
    const setCb = useSafeCb(setState)
    return [state, setCb];
}
export default useSafeState;

