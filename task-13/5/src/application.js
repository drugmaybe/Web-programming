import uniqueId from 'lodash/uniqueId.js';

// BEGIN
export default () => {
    const state = {
        lists: [{ id: 'general', name: 'General' }],
        tasks: [],
        currentListId: 'general'
    };

    const listsContainer = document.querySelector('[data-container="lists"]');
    const tasksContainer = document.querySelector('[data-container="tasks"]');
    const newListForm = document.querySelector('[data-container="new-list-form"]');
    const newTaskForm = document.querySelector('[data-container="new-task-form"]');

    const renderLists = () => {
        const ul = document.createElement('ul');

        state.lists.forEach(list => {
            const li = document.createElement('li');

            if (list.id === state.currentListId) {
                li.innerHTML = `<b>${list.name}</b>`;
            } else {
                const link = document.createElement('a');
                link.href = `#${list.id}`;
                link.textContent = list.name;
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    state.currentListId = list.id;
                    render();
                });
                li.appendChild(link);
            }

            ul.appendChild(li);
        });

        listsContainer.innerHTML = '';
        listsContainer.appendChild(ul);
    };

    const renderTasks = () => {
        const currentTasks = state.tasks
            .filter(task => task.listId === state.currentListId);

        if (currentTasks.length === 0) {
            tasksContainer.innerHTML = '';
            return;
        }

        const ul = document.createElement('ul');

        currentTasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;
            ul.appendChild(li);
        });

        tasksContainer.innerHTML = '';
        tasksContainer.appendChild(ul);
    };

    const render = () => {
        renderLists();
        renderTasks();
    };

    newListForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = newListForm.elements.name.value.trim();

        if (!name) return;

        const isNameExists = state.lists.some(list =>
            list.name.toLowerCase() === name.toLowerCase()
        );

        if (!isNameExists) {
            state.lists.push({
                id: uniqueId(),
                name
            });
            newListForm.reset();
            render();
        }
    });

    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = newTaskForm.elements.name.value.trim();

        if (!name) return;

        state.tasks.push({
            id: uniqueId(),
            listId: state.currentListId,
            name
        });

        newTaskForm.reset();
        renderTasks();
    });

    render();
};
// END