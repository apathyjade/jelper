const toCssLengthValue = (num)=>{
    if ('string' == typeof num) return num;
    if ('number' == typeof num) return `${num}px`;
    return 'initial';
};
export { toCssLengthValue };
