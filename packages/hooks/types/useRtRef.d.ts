/// <reference types="react" />
export default function useRtRef<T>(val: T): import("react").MutableRefObject<T>;
