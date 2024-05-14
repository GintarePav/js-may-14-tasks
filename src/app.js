// console.log("test");
import addNewItem from "./modules/addNewItem";
import completeItem from "./modules/completeItem";
import reverseCompletion from "./modules/completionReverse";
import changeStatus from "./modules/changeStatus";

document.getElementById("save-btn").addEventListener("click", (e) => {
  e.preventDefault();
  addNewItem();
});

document.querySelector("tbody").addEventListener("click", (e) => {
  if (e.target.matches("svg")) {
    e.preventDefault();
    if (e.target.classList.contains("list-table__unchecked")) {
      completeItem(e);
    } else {
      reverseCompletion(e);
    }
  }
  if (
    e.target.matches("td:nth-child(4)") &&
    !e.target.classList.contains("list-table__greyed")
  ) {
    changeStatus(e);
  }
});
