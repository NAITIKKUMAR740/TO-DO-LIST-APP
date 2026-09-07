const addTodoBtn=document.getElementById("addTodoBtn")
const  todoInput=document.getElementById("todoInput")

let todoitem;

addTodoBtn.addEventListener("click" ,()=>{

    console.log("clicked")
    todoitem=todoInput.value
    console.log(todoitem)
    todoInput.value=" "
})