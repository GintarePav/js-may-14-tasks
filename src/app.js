// console.log("test");
import addNewItem from "./modules/addNewItem";
import completeItem from "./modules/completeItem";

document.getElementById("save-btn").addEventListener("click", (e) => {
  e.preventDefault();
  addNewItem();
});

document.querySelector("tbody").addEventListener("click", (e) => {
  if (e.target.matches(".svg")) {
    console.log("checkmark clicked");
    e.preventDefault();
    completeItem(e);
  }
});
