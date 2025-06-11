// BEGIN
export default function filterLaptops(laptops) {
    const form = document.querySelector('form');
    const resultContainer = document.querySelector('.result');

    const filterLaptopsList = () => {
        const formData = new FormData(form);
        const processorEq = formData.get('processor_eq');
        const memoryEq = formData.get('memory_eq');
        const frequencyGte = formData.get('frequency_gte');
        const frequencyLte = formData.get('frequency_lte');

        const filteredLaptops = laptops.filter((laptop) => {
            return (
                (processorEq ? laptop.processor === processorEq : true) &&
                (memoryEq ? laptop.memory === Number(memoryEq) : true) &&
                (frequencyGte ? laptop.frequency >= Number(frequencyGte) : true) &&
                (frequencyLte ? laptop.frequency <= Number(frequencyLte) : true)
            );
        });

        resultContainer.innerHTML = '';

        if (filteredLaptops.length > 0) {
            const ul = document.createElement('ul');
            filteredLaptops.forEach(laptop => {
                const li = document.createElement('li');
                li.textContent = laptop.model;
                ul.appendChild(li);
            });
            resultContainer.appendChild(ul);
        } else {
            resultContainer.innerHTML = '';
        }
    };

    form.addEventListener('input', filterLaptopsList);
    form.addEventListener('change', filterLaptopsList);

    filterLaptopsList();
}

// END