// console.log("test");
import addNewItem from "./modules/addNewItem";
import completeItem from "./modules/completeItem";
import reverseCompletion from "./modules/completionReverse";
import changeStatus from "./modules/changeStatus";
import saveTable from "./modules/saveToLocalStorage";
import removeTask from "./modules/deleteTask";

document.getElementById("save-btn").addEventListener("click", (e) => {
  e.preventDefault();
  addNewItem();
  saveTable();
});

document.querySelector("tbody").addEventListener("click", (e) => {
  if (e.target.matches(".svg")) {
    e.preventDefault();
    if (e.target.classList.contains("list-table__unchecked")) {
      completeItem(e);
      saveTable();
    } else {
      reverseCompletion(e);
      saveTable();
    }
  }
  if (
    e.target.matches("td:nth-child(4)") &&
    !e.target.classList.contains("list-table__greyed")
  ) {
    changeStatus(e);
    saveTable();
  }

  if (e.target.matches(".bin")) {
    removeTask(e);
    saveTable();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("table-body").innerHTML =
    localStorage.getItem("tableBody");
});
