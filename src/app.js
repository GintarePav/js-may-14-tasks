// console.log("test");
import addNewItem from "./modules/addNewItem";

document.getElementById("save-btn").addEventListener("click", (e) => {
  console.log("button clicked");
  e.preventDefault();
  addNewItem();
});
