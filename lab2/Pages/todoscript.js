
    const todoForm = document.getElementById("todo-form");
    const todoTitle = document.getElementById("todo-title");
    const todoDescription = document.getElementById("todo-description");
    const todoList = document.getElementById("todo-list");
    // создаем пустой массив для хранения задач
    let todos = [];

    // обработчик отправки формы
    todoForm.addEventListener("submit", (event) => {
    // отменяем стандартное поведение браузера при отправке формы
    event.preventDefault();

    // получаем значение заголовка и описания задачи из полей формы
    const title = todoTitle.value;
    const description = todoDescription.value;

    // создаем объект задачи и добавляем его в массив todos
    const todo = { title, description };
    todos.push(todo);

    // очищаем поля формы
    todoTitle.value = "";
    todoDescription.value = "";
    showTodoList();
    });
    // функция для отображения списка задач
    function showTodoList() {
    // очищаем текущий список задач
    todoList.innerHTML = "";

    // создаем элементы списка задач и добавляем их в todoList
    for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement("li");
    todoItem.innerText = `${i+1 +')  ' + todos[i].title}: ${todos[i].description}`;
    todoList.appendChild(todoItem);
    }
    }


