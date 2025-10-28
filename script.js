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

// Assignment #7 — jQuery Tasks

$(document).ready(function() {
  console.log("jQuery is ready!");

  // Task 1
  $("#jq7-change-text").click(() => {
    $("#jq7-text").text("Text successfully changed with jQuery!");
  });

  // Task 2
  $("#jq7-hide").click(() => $("#jq7-paragraph").hide());
  $("#jq7-show").click(() => $("#jq7-paragraph").show());
  $("#jq7-toggle").click(() => $("#jq7-paragraph").toggle());

  // Task 3
  $("#jq7-fadeout").click(() => $("#jq7-fade-image").fadeOut(500));
  $("#jq7-fadein").click(() => $("#jq7-fade-image").fadeIn(500));
  $("#jq7-fadetoggle").click(() => $("#jq7-fade-image").fadeToggle(500));

  // Task 4
  $("#jq7-slide-btn").click(() => $("#jq7-panel").slideToggle(400));

  // Task 5
  $("#jq7-add-item").click(() => $("#jq7-list").append("<li>New Item</li>"));
  $("#jq7-remove-item").click(() => $("#jq7-list li:last").remove());

  // Task 6
  $("#jq7-change-src").click(() =>
    $("#jq7-image").attr("src", "https://picsum.photos/150?random=" + Math.floor(Math.random() * 100))
  );
  $("#jq7-change-link").click(() =>
    $("#jq7-link").attr("href", "https://openai.com").text("Visit OpenAI")
  );

  // Task 7
  $("#jq7-form input").on("keyup", () => {
    const name = $("#jq7-name").val();
    const email = $("#jq7-email").val();
    $("#jq7-output").text(`Name: ${name} | Email: ${email}`);
  });

  // Task 8–10 Animations
  $("#jq7-animate").click(() => {
    $("#jq7-box").animate({ width: "150px", height: "150px", left: "50px" }, 600);
  });

  $("#jq7-sequence").click(() => {
    $("#jq7-box")
      .animate({ left: "+=150" }, 500)
      .animate({ top: "+=100" }, 500)
      .animate({ width: "50px", height: "50px" }, 400)
      .animate({ left: "0", top: "0" }, 600);
  });

  $("#jq7-combo").click(() => {
    $("#jq7-box").animate(
      { left: "100px", opacity: 0.5, width: "120px", height: "120px" },
      700
    );
  });

  // Task 11 — Bouncing Ball
  $("#jq7-bounce").click(() => {
    const ball = $("#jq7-ball");
    const areaWidth = $("#jq7-ball-area").width() - 50;
    let direction = 1;

    function bounce() {
      ball.animate({ left: areaWidth * direction }, 800, "swing", () => {
        direction = 1 - direction; // reverse
        bounce();
      });
    }

    bounce();
  });
});
