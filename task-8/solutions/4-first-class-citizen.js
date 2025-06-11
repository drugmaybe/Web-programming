const run = (text) => {
    // BEGIN
    const takeLast = (str, n) => {
        if (str.length === 0 || str.length < n) {
            return null;
        }
        return str.slice(-n).split('').reverse().join('');
    };
    // END
  
    return takeLast(text, 4);
  };
  
export default run;