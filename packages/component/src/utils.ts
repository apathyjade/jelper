export const toCssLengthValue = (num?: string | number, defVal: string = 'initial') => {
  if (typeof num === 'string') {
    return num;
  }
  if (typeof num === 'number') {
    return `${num}px`;
  }
  return defVal;
};
