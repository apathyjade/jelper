export const toCssLengthValue = (num?: string | number) => {
  if (typeof num === 'string') {
    return num;
  }
  if (typeof num === 'number') {
    return `${num}px`;
  }
  return 'initial';
};
