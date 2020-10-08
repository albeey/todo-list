const submitBttn = document.querySelector("#submit-button");

submitBttn.addEventListener("click", getTodo);

function getTodo() {
    let input = document.querySelector("input");
    if (input.value.trim().length > 0) {
        addTodo(input.value);
        input.value = "";
    }
}

const todoList = document.querySelector(".todo-list")

function addTodo(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");

    const li = document.createElement("li");
    li.textContent = todo;
    todoDiv.appendChild(li);

    const completeOption = document.createElement("span");
    completeOption.textContent = "✓";
    completeOption.classList.add("complete-option");
    todoDiv.appendChild(completeOption);

    const deleteOption = document.createElement("span");
    deleteOption.textContent = "✗";
    deleteOption.classList.add("delete-option");
    todoDiv.appendChild(deleteOption);

    todoList.appendChild(todoDiv);
}

todoList.addEventListener("click", handleClick);

function handleClick(e) {
    const item = e.target;
    if (item.classList[0] === "complete-option") {
        item.parentNode.querySelector("li").classList.toggle("completed");
    } 

    if (item.classList[0] === "delete-option") {
        item.parentNode.remove();
    }
}