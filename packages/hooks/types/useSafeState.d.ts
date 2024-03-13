/// <reference types="react" />
declare const useSafeState: <T>(value?: T) => [s: T, setFn: import("react").Dispatch<import("react").SetStateAction<T>>];
export default useSafeState;
