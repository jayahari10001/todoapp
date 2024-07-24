document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const newItemInput = document.getElementById('new-item');
    const addItemButton = document.getElementById('add-item');
    let editIndex = null;

    addItemButton.addEventListener('click', () => {
        if (editIndex === null) {
            addItem();
        } else {
            updateItem();
        }
    });

    newItemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            if (editIndex === null) {
                addItem();
            } else {
                updateItem();
            }
        }
    });

    function addItem() {
        const newItemText = newItemInput.value.trim();
        if (newItemText === '') {
            return;
        }

        const li = document.createElement('li');
        li.textContent = newItemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        const editButton = document.createElement('button');
        editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M361 912v-58h270v58H361Zm-34-192L159 553l229-229 168 168-229 228Zm358-358-168-168 58-58q20-20 46.5-19.5T668 139l96 96q20 20 19.5 46.5T744 328l-59 59Z"/></svg>';
        editButton.addEventListener('click', () => {
            newItemInput.value = newItemText;
            editIndex = Array.from(todoList.children).indexOf(li);
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);
        newItemInput.value = '';
    }

    function updateItem() {
        const newItemText = newItemInput.value.trim();
        if (newItemText === '') {
            return;
        }

        const items = todoList.children;
        items[editIndex].firstChild.textContent = newItemText;
        editIndex = null;
        newItemInput.value = '';
    }
});
