const addNewItem = () => {
  if (document.getElementById("new-item-form").checkValidity()) {
    const itemRow = document.createElement("tr");
    const checkmark = document.createElement("th");
    checkmark.setAttribute("scope", "row");
    checkmark.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-check list-table__unchecked svg"
        viewBox="0 0 16 16"
      >
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
      </svg>`;
    itemRow.appendChild(checkmark);
    const taskTitle = document.createElement("td");
    taskTitle.textContent = document.getElementById("subject").value;
    itemRow.appendChild(taskTitle);
    const dueDate = document.createElement("td");
    dueDate.textContent = document.getElementById("due-date").value;
    itemRow.appendChild(dueDate);
    const itemStatus = document.createElement("td");
    itemStatus.textContent = document.getElementById("status").value;
    itemStatus.classList.add("list-table__clickable");
    itemRow.appendChild(itemStatus);
    const removeBin = document.createElement("th");
    removeBin.setAttribute("scope", "row");
    removeBin.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash bin" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg>`;
    itemRow.appendChild(removeBin);
    document.getElementById("table-body").appendChild(itemRow);
  } else {
    alert("All fields are required.");
  }
};

export default addNewItem;
