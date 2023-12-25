"use strict";

// FUNCTIONS
const addItem = () => {
  // Initial conditions
  const userInput = taskInput.value;

  // Check if input exist
  if (!userInput) {
    window.alert(`No task provided. Please introduce a task and try again.`);
    taskInput.value = "";
    return 1;
  }

  // Check if characters are less than 29
  if (userInput.length > 29) {
    window.alert(
      `Limit of characters exceed, please introduce less than 30 characters and try again.`
    );
    taskInput.value = "";
    return 1;
  }

  const newTask = document.createElement("li");
  taskList.appendChild(newTask);

  const newIconCheckContainer = document.createElement("div");
  newIconCheckContainer.classList.add("icon-container");
  newTask.appendChild(newIconCheckContainer);

  const newCheckBtn = document.createElement("button");
  newCheckBtn.classList.add("check");
  newIconCheckContainer.appendChild(newCheckBtn);

  const newCheckIcon = document.createElement("span");
  newCheckIcon.classList.add("check");
  newCheckIcon.classList.add("material-symbols-outlined");
  newCheckIcon.textContent = " done ";
  newCheckIcon.classList.add("hidden");
  newCheckBtn.appendChild(newCheckIcon);

  const newTaskContent = document.createElement("p");
  newTaskContent.textContent = userInput;
  newTask.appendChild(newTaskContent);

  const newIconDeleteContainer = document.createElement("div");
  newIconDeleteContainer.classList.add("icon-container");
  newTask.appendChild(newIconDeleteContainer);

  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.classList.add("delete");
  newIconDeleteContainer.appendChild(newDeleteBtn);

  const newDeleteIcon = document.createElement("span");
  newDeleteIcon.classList.add("delete");
  newDeleteIcon.classList.add("material-symbols-outlined");
  newDeleteIcon.textContent = " close ";
  newDeleteBtn.appendChild(newDeleteIcon);

  taskInput.value = "";
};

// SELECTORS
const taskList = document.querySelector(".task-list");
const taskInput = document.querySelector(".task-input");
const taskAddBtn = document.querySelector(".task-add");
const taskForm = document.querySelector(".task-form");

// GLOBAL VARIABLES
// Maximum amount of tasks = 5
let taskCounter = 0;

// EVENT LISTENERS:
// Prevent default behavior of the form
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Create a new Task and add it to the list
taskAddBtn.addEventListener("click", addItem);

// Mark/Unmarked as checked or delete the current item.
taskList.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] == "check") {
    checkItem();
  } else if (item.classList[0] == "delete") {
    deleteItem();
  }
});

/* PROGRAM EXECUTION:
1. Check if user input exist and has less than 30 characters.
  a) If no, show an alert and cancel the execution.
2. Create a new item with the task provided by the customer.
3. If user click on check, change the style of the task to complete.
4. If user click on delete, delete the task from the list.

REQUIREMENTS:
1. 30 Characters max per task.
2. 5 Task limit at a time.
*/
