const completeItem = (e) => {
  const checkmark = e.target;
  const currentRow = checkmark.closest("tr");
  checkmark.classList.remove("list-table__unchecked");
  checkmark.classList.add("list-table__checked");
  const taskTitle = currentRow.querySelector("td:nth-child(2)");
  taskTitle.classList.add("list-table__crossed", "list-table__greyed");
  const dueDate = currentRow.querySelector("td:nth-child(3)");
  dueDate.classList.add("list-table__greyed");
  const status = currentRow.querySelector("td:nth-child(4)");
  status.classList.add("list-table__greyed");
  status.textContent = "Completed";
};

export default completeItem;
