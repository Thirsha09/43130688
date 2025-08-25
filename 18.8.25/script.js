function addEmployer() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const position = document.getElementById("position").value.trim();

  if (name === "" || age === "" || position === "") {
    alert("Please fill all fields.");
    return;
  }

  const table = document.getElementById("employerTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = name;
  cell2.textContent = age;
  cell3.textContent = position;

  // Clear fields
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("position").value = "";
}
