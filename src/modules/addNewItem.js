const addNewItem = () => {
  if (document.getElementById("new-item-form").checkValidity()) {
    const itemRow = document.createElement("tr");
    const checkmark = document.createElement("th");
    checkmark.setAttribute("scope", "row");
    checkmark.innerHTML = `<a href="#" id="ckeckmark" class="list-table__unchecked">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-check"
        viewBox="0 0 16 16"
      >
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
      </svg>
    </a>`;
    itemRow.appendChild(checkmark);
    const taskTitle = document.createElement("td");
    taskTitle.textContent = document.getElementById("subject").value;
    itemRow.appendChild(taskTitle);
    const dueDate = document.createElement("td");
    dueDate.textContent = document.getElementById("due-date").value;
    itemRow.appendChild(dueDate);
    const itemStatus = document.createElement("td");
    itemStatus.textContent = document.getElementById("status").value;
    itemRow.appendChild(itemStatus);
    document.getElementById("table-body").appendChild(itemRow);
    console.log("item added");
  } else {
    alert("All fields are required.");
  }
};

export default addNewItem;
