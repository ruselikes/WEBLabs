
    const todoForm = document.getElementById("todo-form");
    const todoTitle = document.getElementById("todo-title");
    const todoDescription = document.getElementById("todo-description");
    const todoList = document.getElementById("todo-list");
    // функция для отображения списка задач
    function showTodoList(data) {
        // очищаем текущий список задач
        todoList.innerHTML = "";

        // создаем элементы списка задач и добавляем их в todoList
        for (let i = 0; i < tobuys.length; i++) {
            const todoItem = document.createElement("li");
            todoItem.innerText = `${i+1 +')  ' + tobuys[i].title}: ${tobuys[i].description}`;
            todoList.appendChild(todoItem);
        }
    }
    // создаем пустой массив для хранения задач
    let tobuys = [];
    fetch('http://localhost:3000/pokupki')
        .then(response => response.json())
        .then(data => {tobuys = data;console.log(tobuys);})
    showTodoList();
    // обработчик отправки формы
    todoForm.addEventListener("submit", (event) => {
        // отменяем стандартное поведение браузера при отправке формы
        event.preventDefault();

        // получаем значение заголовка и описания задачи из полей формы
        const title = todoTitle.value;
        const description = todoDescription.value;

        // создаем объект задачи и добавляем его в массив todos
        const pokupka = {"title":title, "description":description};

        tobuys.push(pokupka);

//         $.post("/tobuy", pokupka, function (result) {
//             console.log(result);
// // нужно отправить новый объект на клиент
// // после получения ответа сервера
//             tobuys.push(pokupka);
//         });
        fetch('http://localhost:3000/tobuy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pokupka)
        })


    // очищаем поля формы
    todoTitle.value = "";
    todoDescription.value = "";
    showTodoList();
    });



