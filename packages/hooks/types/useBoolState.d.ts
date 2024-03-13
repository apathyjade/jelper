declare const useBoolState: (value: boolean) => (boolean | ((switchValue?: React.SetStateAction<boolean>) => void))[];
export default useBoolState;
