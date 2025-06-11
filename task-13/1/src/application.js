// BEGIN
export default () => {
    const form = document.querySelector('form');
    const resetBtn = document.querySelector('button[type="button"]');
    const input = document.querySelector('input[name="number"]');
    const resultDiv = document.getElementById('result');

    let total = 0;

    input.focus();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const number = parseInt(input.value);
        if (!isNaN(number)) {
            total += number;
            resultDiv.textContent = total;
        }

        form.reset();
        input.focus();
    });

    resetBtn.addEventListener('click', () => {
        total = 0;
        resultDiv.textContent = total;
        form.reset();
        input.focus();
    });
};
// END