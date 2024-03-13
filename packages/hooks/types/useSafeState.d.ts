declare const useSafeState: <T>(value?: T) => [
    s: T,
    setFn: React.Dispatch<React.SetStateAction<T>>
];
export default useSafeState;
