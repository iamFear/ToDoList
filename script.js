"use strict";

// FUNCTIONS:

// Create new task:
const newTask = () => {
  // TASKS LIMIT = 5 \ TASK START AT 0
  if (taskCounter > 4) {
    window.alert(`LIMIT OF TASK EXCEED`);
    taskInput.value = "";
    return 1;
  }

  // USER INPUT
  const userInput = taskInput.value;

  if (!userInput) {
    window.alert(`PLEASE INSERT A TASK`);
    taskInput.value = "";
    return 1;
  } else if (userInput.length > 29) {
    window.alert(
      `LIMIT OF CHARACTERS EXCEED. PLEASE USE LESS THAN 3O CHARACTERS NEXT TIME`
    );
    taskInput.value = "";
    return 1;
  }

  // CREATE THE NEW TASK
  const newLI = document.createElement("li");
  taskArray[taskCounter] = [`task--${taskCounter}`];
  newLI.classList.add(`task--${taskCounter}`);
  taskCounter++;
  taskList.appendChild(newLI);

  const newIconContainer = document.createElement("div");
  newIconContainer.classList.add("icon-container");
  newLI.appendChild(newIconContainer);

  const newOpen = document.createElement("button");
  newOpen.classList.add("open");
  newIconContainer.appendChild(newOpen);

  const newIcon = document.createElement("span");
  newIcon.classList.add("material-symbols-outlined");
  newIcon.textContent = " done ";
  newOpen.appendChild(newIcon);

  const newContent = document.createElement("p");
  newContent.textContent = userInput;
  newLI.appendChild(newContent);

  const newIconContainerClose = document.createElement("div");
  newIconContainerClose.classList.add("icon-container");
  newLI.appendChild(newIconContainerClose);

  const newClose = document.createElement("button");
  newClose.classList.add("close");
  newIconContainerClose.appendChild(newClose);

  const newIconClose = document.createElement("span");
  newIconClose.classList.add("material-symbols-outlined");
  newIconClose.textContent = " close ";
  newClose.appendChild(newIconClose);

  taskInput.value = "";
};

// HTML ELEMENTS:
const taskForm = document.querySelector(".task-form");
const taskInput = document.querySelector(".task-input");
const taskAddBtn = document.querySelector(".task-add");
const taskRemoveBtn = document.querySelector(".close");
const taskDoneBtn = document.querySelector(".open");
const taskList = document.querySelector(".task-list");

// GLOBAL VARIABLES:
// Count the amount of task added to the list
let taskCounter = 0;
let taskArray = [];

// APP:
// PREVENT THE FORM TO RELOAD THE SITE
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// ADD THE NEW TASK TO THE LIST
taskAddBtn.addEventListener("click", newTask);

/* APP EXECUTION
1. User type a new task.
2. Check if the task has less than 29 characters
  a. If yes, show alert that task invalid, explain the issue and try again
  b. If no, continue with steps below
3. Create a new task element with the task provided by the user as the content
4. If user clicks left button, change the status/style of the task to complete
5. If the user clicks the right button, delete the task from the list

REMEMBER: each task should have a unique identifier to track it and avoid deleting the wrong task
*/
