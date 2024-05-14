const changeStatus = (e) => {
  const availableStatuses = ["New", "In Progress", "Complete"];
  const updatedStatus = e.target;
  updatedStatus.classList.remove("list-table__attention");
  if (availableStatuses.includes(updatedStatus.textContent)) {
    let statusIndex = availableStatuses.indexOf(updatedStatus.textContent);
    if (availableStatuses[statusIndex + 1] === "Complete") {
      updatedStatus.textContent =
        availableStatuses[(statusIndex - 1) % availableStatuses.length];
    } else {
      updatedStatus.textContent =
        availableStatuses[(statusIndex + 1) % availableStatuses.length];
    }
  }
};

export default changeStatus;
