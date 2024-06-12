
import { useState } from 'react';
import useSafeCb from './useSafeCb';

const useSafeState = <T>(value?: T): [
    s: T|undefined,
    setFn: React.Dispatch<React.SetStateAction<T|undefined>>,
] => {
    const [state, setState] = useState<T|undefined>(value);
    const setCb = useSafeCb(setState)
    return [state, setCb];
}
export default useSafeState;
