## index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Work To-Dos</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <h1><strong>WORK TO-DOS</strong></h1>
        <p>Enter text into the input field to add items to your list.</p>
        <p>Click the item to mark it as complete.</p>
        <p>Click the "X" to remove the item from your list.</p>
        <div class="input-container">
            <input type="text" id="new-item" placeholder="New item...">
            <button id="add-item">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
        </div>
        <ul id="todo-list"></ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
```
## styles.css
```
body {
    font-family: Arial, sans-serif;
    background-color: #00a6bf;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin: 0;
}

.container {
    text-align: center;
    color: white;
}

h1 {
    font-family: "Anton SC", sans-serif;
    font-weight: 400;
    font-style: normal; 
    margin-bottom: 20px;
}

p {
    margin: 20px 0;
}


span {
    color: lightgreen;
}

.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#new-item {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    width: 300px;
}

#add-item {
    background-color: #00a6bf;
    border: none;
    padding: 10px;
    cursor: pointer;
    
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: white;
    color: black;
    padding: 10px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

li.completed {
    text-decoration: line-through;
    color: gray;
}

button {
    background-color: red;
    color: black;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
 
}
```
## app.js
```
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
```
## OUTPUT
![Screenshot 2024-07-24 140836](https://github.com/user-attachments/assets/4c941538-3ce9-40b2-ad06-d4f3b730f405)
