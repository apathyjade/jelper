declare const useListener: (type: keyof WindowEventMap, listener: () => any, options?: boolean | AddEventListenerOptions) => void;
export default useListener;
