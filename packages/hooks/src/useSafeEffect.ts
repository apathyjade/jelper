
import { useEffect } from 'react';
import useSafeCb from './useSafeCb';


const useSafeEffect = (cb, deps: any[]) => {
    const safeCb = useSafeCb(cb, deps)
    useEffect(safeCb, [safeCb])
}

export default useSafeEffect;
