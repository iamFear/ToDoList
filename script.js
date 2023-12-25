"use strict";

// FUNCTIONS

// SELECTORS
const taskList = document.querySelector(".task-list");
const taskInput = document.querySelector(".task-input");
const taskAddBtn = document.querySelector(".task-add");

// GLOBAL VARIABLES
// Maximum amount of tasks = 5
let taskCounter = 0;

// EVENT LISTENERS
taskList.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] == "check") {
    console.log(`Check item`);
  } else if (item.classList[0] == "delete") {
    console.log("Delete item");
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
