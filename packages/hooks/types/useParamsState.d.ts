/// <reference types="react" />
export default function useParamsState<T extends object>(defData: T): [
    d: T,
    u: React.Dispatch<React.SetStateAction<Partial<T>>>,
    s: React.Dispatch<React.SetStateAction<T>>
];
