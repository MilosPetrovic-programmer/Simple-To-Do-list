document.getElementById("addTaskBtn").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Molimo vas unesite željeni zadatak.");
  } else {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  // Kreiramo span za tekst zadatka
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Kreiranje dugmeta za brisanje
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "&#128465;";  // Ikonica kantice
  deleteBtn.classList.add("delete-btn");

  // Dodavanje precrtavanja na klik bilo gde unutar li (osim deleteBtn)
  li.addEventListener("click", function(e) {
    if (e.target !== deleteBtn) {  // Proveravamo da li nije kliknut deleteBtn
      li.classList.toggle("completed");
    }
  });

  // Brisanje taska
  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
  });

  li.appendChild(taskSpan);  // Dodajemo tekst u listu
  li.appendChild(deleteBtn); // Dodajemo kanticu
  taskList.appendChild(li);
}
