var taskInput = document.getElementById('taskInput');
var addButton = document.getElementById('addButton');
var taskList = document.getElementById('taskList');
var emptyState = document.getElementById('emptyState');

addButton.addEventListener('click', function () {

    var taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    emptyState.style.display = "none";

    var taskItem = document.createElement("li");
    taskItem.className = "task-item";

    taskItem.innerHTML =
        '<div class="task-checkbox">✓</div>' +
        '<span class="task-text">' + taskText + '</span>' +
        '<button class="delete-btn">X</button>';

    taskList.appendChild(taskItem);

    taskInput.value = "";

    var checkBtn = taskItem.querySelector(".task-checkbox");

    checkBtn.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
        checkBtn.classList.toggle("checked");
    });

    var deleteBtn = taskItem.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {
        taskItem.remove();

        if (taskList.children.length === 0) {
            emptyState.style.display = "block";
        }
    });
});

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addButton.click();
    }
});
