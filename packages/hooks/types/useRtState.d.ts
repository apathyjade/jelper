/// <reference types="react" />
interface Options<T> {
    isEqual?: (a: T, b: T) => boolean;
}
export default function useRtState<T = any>(value: T, onChange?: (value: T) => void, opts?: Options<T>): (T | import("react").Dispatch<import("react").SetStateAction<T>>)[];
export {};
