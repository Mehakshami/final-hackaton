// Add Task function
window.addTask = function (columnId) {
  const input = document.getElementById(columnId + "Input");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const taskList = document.querySelector(`#${columnId} .task-list`);
    const task = createTaskElement(taskText);
    taskList.appendChild(task);

    input.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Create Task Element
function createTaskElement(text) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.innerHTML = `
    <p>${text}</p>
    <button class="delete" onclick="deleteTask(this)">Delete</button>
  `;
  return taskDiv;
}

// Delete Task
window.deleteTask = function (button) {
  const task = button.parentElement;
  task.remove();
}
