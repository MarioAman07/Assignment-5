// ===============================
// Assignment #6 — JavaScript Basics
// Student: Amanaman
// Group: Write your group here
// ===============================

// -------------------------------
// Part 1 — Introduction to JavaScript
// -------------------------------

// Task 0 — First Script
console.log("Amanaman - Group XYZ");
alert("Hello, JavaScript World!");

// Task 1 — Variables & Operators
let name = "Amanaman";
let age = 20;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

let message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);


// -------------------------------
// Part 2 — DOM Manipulation
// -------------------------------

// Task 2 — Changing Content
const changeTextBtn = document.getElementById("changeTextBtn");
const paragraph = document.getElementById("text");

if (changeTextBtn && paragraph) {
  changeTextBtn.addEventListener("click", () => {
    paragraph.textContent = "The text has been changed successfully!";
  });
}

// Task 3 — Changing Styles
const styleBox = document.getElementById("styleBox");
const changeColorBtn = document.getElementById("changeColorBtn");
const changeFontBtn = document.getElementById("changeFontBtn");

if (styleBox && changeColorBtn && changeFontBtn) {
  changeColorBtn.onclick = () => {
    styleBox.style.backgroundColor = "lightblue";
  };

  changeFontBtn.onclick = () => {
    styleBox.style.fontSize = "24px";
  };
}

// Task 4 — Creating & Removing Elements
const addItemBtn = document.getElementById("addItem");
const removeItemBtn = document.getElementById("removeItem");
const itemList = document.getElementById("itemList");

if (addItemBtn && removeItemBtn && itemList) {
  addItemBtn.onclick = () => {
    const li = document.createElement("li");
    li.textContent = "New List Item";
    itemList.appendChild(li);
  };

  removeItemBtn.onclick = () => {
    if (itemList.lastElementChild) {
      itemList.removeChild(itemList.lastElementChild);
    }
  };
}


// -------------------------------
// Part 3 — Events
// -------------------------------

// Task 5 — Mouse Events
const colorBox = document.getElementById("colorBox");
if (colorBox) {
  colorBox.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = "lightgreen";
  });
  colorBox.addEventListener("mouseout", () => {
    colorBox.style.backgroundColor = "lightcoral";
  });
}

// Task 6 — Keyboard Events
const liveInput = document.getElementById("liveInput");
const displayText = document.getElementById("displayText");

if (liveInput && displayText) {
  liveInput.addEventListener("keyup", (e) => {
    displayText.textContent = e.target.value;
  });
}

// Task 7 — Form Validation (optional)
const form = document.getElementById("myForm");
const errorMsg = document.getElementById("errorMsg");

if (form && errorMsg) {
  form.addEventListener("submit", (e) => {
    const nameField = document.getElementById("nameField").value.trim();
    const emailField = document.getElementById("emailField").value.trim();
    const passField = document.getElementById("passField").value.trim();

    if (!nameField || !emailField || !passField) {
      e.preventDefault();
      errorMsg.textContent = "⚠️ Please fill in all fields before submitting!";
    } else {
      errorMsg.textContent = "";
      alert("Form submitted successfully!");
    }
  });
}


// -------------------------------
// Part 4 — Mini Project: To-Do List
// -------------------------------
const tasks = [];
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

if (addTaskBtn && taskInput && taskList) {
  addTaskBtn.onclick = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center mt-2";
    li.textContent = taskText;

    const btnGroup = document.createElement("div");

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "btn btn-sm btn-success me-2";
    completeBtn.onclick = () => {
      li.style.textDecoration = "line-through";
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.onclick = () => li.remove();

    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(btnGroup);

    taskList.appendChild(li);
    tasks.push(taskText);
    taskInput.value = "";
  };
}

console.log("✅ Script loaded successfully — all tasks ready!");
