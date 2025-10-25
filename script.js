// Task 0 — First Script
console.log("Aman - Group SE-2422");
alert("Hello, JavaScript World!");

// Task 1 — Variables & Operators
let myName = "Aman";   
let myAge = 18;          
let isStudent = true;       


let x = 10;
let y = 5;

console.log("Addition:", x + y);        
console.log("Subtraction:", x - y);     
console.log("Multiplication:", x * y);  
console.log("Division:", x / y);        
console.log("Remainder:", x % y);      


let message = "My name is " + myName + " and I am " + myAge + " years old.";
console.log(message);


console.log(`Student: ${myName}, Age: ${myAge}, Is Student: ${isStudent}`);



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
    li.className = "list-group-item";
    const span = document.createElement("span");
    span.textContent = "New List Item";
    li.appendChild(span);

    itemList.appendChild(li);
  };

  removeItemBtn.onclick = () => {
    if (itemList.lastElementChild) {
      itemList.removeChild(itemList.lastElementChild);
    }
  };
}



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


// Task 8
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center mt-2";

    if (task.completed) li.style.textDecoration = "line-through";
    li.textContent = task.text;

    const btnGroup = document.createElement("div");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "btn btn-sm btn-success me-2";
    completeBtn.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(btnGroup);

    taskList.appendChild(li);
  });
}

if (addTaskBtn && taskInput && taskList) {
  addTaskBtn.onclick = () => {
    const text = taskInput.value.trim();
    if (text === "") return;
    tasks.push({ text, completed: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  };
}

renderTasks();

console.log(" Script loaded successfully — all tasks ready!");