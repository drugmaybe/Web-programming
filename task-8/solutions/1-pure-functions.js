// BEGIN
const sayPrimeOrNot = (num) => {
    if (num < 2) {
        console.log('no');
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log('no');
            return;
        }
    }
    console.log('yes');
};

export default sayPrimeOrNot;
// END