import { useRef } from "react";

export default function useRtRef<T>(val: T) {
  const ref = useRef<T>()
  ref.current = val;
  return ref;
};
