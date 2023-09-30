function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const todoList = document.getElementById("todo-list");
        const listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        todoList.appendChild(listItem);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
