
    const todoList = document.getElementById("todo-list");
    const addFormContainer = document.getElementById("add-form-container");
    const addForm = document.getElementById("add-form");

    // Функция для создания элемента списка задач
    function createListItem(item) {
    const listItem = document.createElement("tr");
    listItem.innerHTML = `
                <td contenteditable="true">${item.title}</td>
                <td contenteditable="true">${item.description}</td>
                <td>
                    <button class="edit-button">Редактировать</button>
                    <button class="delete-button">Удалить</button>
                </td>
            `;

    const editButton = listItem.querySelector(".edit-button");
    editButton.addEventListener("click", () => {
    updateItem(item._id, listItem);
});

    const deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
    deleteItem(item._id, listItem);
});

    return listItem;
}
    function toggleEditMode(listItem) {
        const cells = listItem.cells;
        const editButton = listItem.querySelector(".edit-button");
        const isEditMode = editButton.textContent === "Сохранить";

        for (let i = 0; i < cells.length - 1; i++) {
            const cell = cells[i];

            if (isEditMode) {
                cell.contentEditable = false;
                editButton.textContent = "Редактировать";
            } else {
                cell.contentEditable = true;
                editButton.textContent = "Сохранить";
            }
        }
    }

    // Функция для отображения списка задач
    async function showTodoList() {
    try {
    const response = await fetch("http://localhost:3000/tobuys/pokupki");
    const data = await response.json();

    todoList.innerHTML = "";

    await data.forEach(item => {
    const listItem = createListItem(item);
    todoList.appendChild(listItem);
});
} catch (error) {
    console.log(error);
}
}


    // Функция для добавления элемента
    async function addItem(event) {
    event.preventDefault();

    const title = addForm.elements.title.value;
    const description = addForm.elements.description.value;

    try {
    const response = await fetch("http://localhost:3000/tobuys/add", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
},
    body: JSON.stringify({ title, description })
});
    const data = await response.json();

    const listItem = createListItem(data);
    todoList.appendChild(listItem);
        addForm.elements.title.value = ""
        addForm.elements.description.value = ""

} catch (error) {
    console.log(error);
}
}
    // Функция для удаления элемента
    async function deleteItem(id, listItem) {
    try {
    await fetch(`http://localhost:3000/tobuys/${id}`, {
    method: "DELETE"
})
    .then(response => response.json())
    .then(data => {
    if (data.success) {
    const tbody = document.getElementById("todo-list");
    tbody.removeChild(listItem);
    showTodoList()
}
})

    .catch(error => console.log(error));
} catch (error) {
    console.log(error);
}
}
    // Функция для обновления элемента
    async function updateItem(id, listItem) {
    try {
    const title = listItem.cells[0].textContent;
    const description = listItem.cells[1].textContent;

    const response = await fetch(`http://localhost:3000/tobuys/${id}`, {
    method: "PUT",
    headers: {
    "Content-Type": "application/json"
},
    body: JSON.stringify({ title, description })
});
    const data = await response.json();

    listItem.cells[0].textContent = data.title;
    listItem.cells[1].textContent = data.description;
    alert("Обновил!")
} catch (error) {
    console.log(error);
}
}

    // Обработчик события отправки формы добавления
    addForm.addEventListener("submit", addItem);

    // При загрузке страницы отображаем список задач
    showTodoList();
