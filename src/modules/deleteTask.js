const removeTask = (e) => {
  const rowToRemove = e.target.closest("tr");
  rowToRemove.remove();
};

export default removeTask;
