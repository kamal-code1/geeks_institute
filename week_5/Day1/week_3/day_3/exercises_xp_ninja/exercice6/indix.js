function createCalendar(year, month) {
  const table = document.createElement("table");
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  
  const headerRow = document.createElement("tr");
  for (let day of days) {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  const date = new Date(year, month - 1, 1);
  const firstDay = (date.getDay() + 6) % 7;

  let currentRow = document.createElement("tr");
  for (let i = 0; i < firstDay; i++) {
    currentRow.appendChild(document.createElement("td"));
  }

  while (date.getMonth() === month - 1) {
    const td = document.createElement("td");
    td.textContent = date.getDate();
    currentRow.appendChild(td);

    if (currentRow.children.length === 7) {
      table.appendChild(currentRow);
      currentRow = document.createElement("tr");
    }

    date.setDate(date.getDate() + 1);
  }

  if (currentRow.children.length > 0) {
    while (currentRow.children.length < 7) {
      currentRow.appendChild(document.createElement("td"));
    }
    table.appendChild(currentRow);
  }

  document.body.appendChild(table);
}

createCalendar(2012, 9); 
