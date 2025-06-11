import 'whatwg-fetch';

export default () => {
  // BEGIN
        const inputs = document.querySelectorAll('input[data-autocomplete]');

        inputs.forEach(input => {
            const listName = input.dataset.autocompleteName;
            const resultsList = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);
            const endpoint = input.dataset.autocomplete;

            input.addEventListener('input', async (e) => {
                const searchTerm = e.target.value.trim();
                const url = new URL(endpoint, window.location.origin);
                url.searchParams.append('search', searchTerm);

                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    // Очищаем список
                    resultsList.innerHTML = '';

                    if (data.length > 0) {
                        // Добавляем найденные варианты
                        data.forEach(item => {
                            const li = document.createElement('li');
                            li.textContent = item;
                            resultsList.appendChild(li);
                        });
                    } else {
                        // Показываем "Nothing" если нет результатов
                        const li = document.createElement('li');
                        li.textContent = 'Nothing';
                        resultsList.appendChild(li);
                    }
                } catch (error) {
                    console.error('Error fetching autocomplete data:', error);
                    resultsList.innerHTML = '<li>Error loading data</li>';
                }
            });
        });
  // END
};
