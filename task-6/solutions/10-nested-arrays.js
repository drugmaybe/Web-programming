// BEGIN
const getSuperSeriesWinner = (scores) => {
    let canadaWins = 0;
    let ussrWins = 0;

    for (const game of scores) {
        const [canada, ussr] = game;
        const difference = canada - ussr;

        if (difference > 0) {
            canadaWins++;
        } else if (difference < 0) {
            ussrWins++;
        }
        // Ничья не учитывается
    }

    if (canadaWins > ussrWins) {
        return 'canada';
    }
    if (ussrWins > canadaWins) {
        return 'ussr';
    }
    return null;
};

export default getSuperSeriesWinner;
// END