"use strict";

// FUNCTIONS:

// Create new task:
const newTask = () => {};

// HTML ELEMENTS:
const taskForm = document.querySelector(".task-form");
const taskInput = document.querySelector(".task-input");
const taskAddBtn = document.querySelector(".task-add");
const taskRemoveBtn = document.querySelector(".close");
const taskDoneBtn = document.querySelector(".open");

// GLOBAL VARIABLES:

// Count the amount of task added to the list
let taskCounter = 0;

// APP:

// PREVENT THE FORM TO RELOAD THE SITE
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

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
