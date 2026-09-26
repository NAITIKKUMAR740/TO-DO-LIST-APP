const addTodoBtn = document.getElementById("addTodoBtn");

const inputTag = document.getElementById("todoInput");
const todoListul = document.getElementById("todoList");
const cleanTodo = document.getElementById("clearCompletedBtn");




let todoText;
let todos = [];

let todosString = localStorage.getItem("todos");

if (todosString) {
    todos = JSON.parse(todosString);
}


const addtodos = () => {
    let string = "";

    for (const todo of todos) {

        string += `<li class="todo-item ${todo.isCompleted ? "completed" : ""}">
            <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
            <span class="todo-text">${todo.title}</span>
            <button class="delete-btn">x</button>
        </li>`;
    }

    todoListul.innerHTML = string;
};
addtodos();

todoListul.addEventListener("change", (e) => {

    if (e.target.classList.contains("todo-checkbox")) {

        const todoItem = e.target.closest(".todo-item");

        const index = [...todoListul.children].indexOf(todoItem);

        todos[index].isCompleted = e.target.checked;

        localStorage.setItem("todos", JSON.stringify(todos));

        todoItem.classList.toggle("completed", e.target.checked);
    }
});


addTodoBtn.addEventListener("click", () => {

    todoText = inputTag.value;

    console.log(todoText);

    inputTag.value = "";

    let todo = {
        title: todoText,
        isCompleted: false
    };

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    addtodos();
});

cleanTodo.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.isCompleted);
    localStorage.setItem("todos", JSON.stringify(todos));
    addtodos();
});



const deleteTodo = (e) => {
    if (e.target.classList.contains("delete-btn")) {
        let todo = e.target.parentElement;
        let index = [...todoListul.children].indexOf(todo);

        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));

        todo.remove();
    }
};

todoListul.addEventListener("click", deleteTodo);

