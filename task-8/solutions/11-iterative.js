const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) {
        return 1;
    }

    let divisor = 2;

    while (divisor <= Math.sqrt(num)) {
        if (num % divisor === 0) {
            return divisor;
        }
        divisor += 1;
    }

    return num;
    // END
  };
  
export default smallestDivisor;
  