const reverseCompletion = (e) => {
  const checkmark = e.target;
  const currentRow = checkmark.closest("tr");
  checkmark.classList.remove("list-table__checked");
  checkmark.classList.add("list-table__unchecked");
  const taskTitle = currentRow.querySelector("td:nth-child(2)");
  taskTitle.classList.remove("list-table__crossed", "list-table__greyed");
  const dueDate = currentRow.querySelector("td:nth-child(3)");
  dueDate.classList.remove("list-table__greyed");
  const status = currentRow.querySelector("td:nth-child(4)");
  status.classList.remove("list-table__greyed");
  status.classList.add("list-table__attention");
};

export default reverseCompletion;
