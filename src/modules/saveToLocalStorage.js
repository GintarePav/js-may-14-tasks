const saveTable = () => {
  localStorage.setItem(
    "tableBody",
    document.getElementById("table-body").innerHTML
  );
};

export default saveTable;
