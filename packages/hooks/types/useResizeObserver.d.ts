export default function useResizeObserver(dom: HTMLElement, cb: (dom: ResizeObserverEntry) => void): (() => void)[];
