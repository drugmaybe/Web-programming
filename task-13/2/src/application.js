import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

// BEGIN
export default async () => {
    const form = document.querySelector('form');
    const input = document.querySelector('input[name="name"]');
    const tasksList = document.getElementById('tasks');

    // Загрузка задач с бэкенда
    const loadTasks = async () => {
        try {
            const response = await axios.get(routes.tasksPath());
            tasksList.innerHTML = ''; // Очищаем текущий список
            response.data.items.forEach(task => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = task.name;
                tasksList.appendChild(li); // Добавляем задачу в конец списка
            });
        } catch (error) {
            console.error('Error loading tasks:', error);
            alert('Ошибка при загрузке задач');
        }
    };

    // Обработчик добавления задачи
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const taskName = input.value.trim();

        if (taskName) {
            try {
                await axios.post(routes.tasksPath(), { name: taskName });
                input.value = '';
                await loadTasks();
            } catch (error) {
                console.error('Error adding task:', error);
                alert('Ошибка при добавлении задачи');
            }
        }
    });

    // Инициализация: загрузка задач при старте
    await loadTasks();
    input.focus();
};

// END