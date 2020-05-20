var d = new this.Date();
function renderDate() {
  d.setDate(1);
  var today = new Date();
  var endDate = new Date(
    d.getMonth() + 1,
    0, // 0-11, 0 = January and so on
    d.getFullYear()
  ).getDate();
}

var prevDate = new Date(d.getFullYear(), d.getMonth(), 0).getDate();

var monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];

function getCalendar(dayNumber, days) {
  var table = document.createElement("table");
  var tr = document.createElement("tr");

  // Row for the days
  for (var i = 0; i <= 6; i++) {
    var td = document.createElement("td");
    td.innerHTML = "SMTWTFS"[i];
    tr.appendChild(td);
  }
  table.appendChild(tr);

  //Create 2nd row
  tr = document.createElement("tr");
  var i;
  for (i = 0; i <= 6; i++) {
    if (i === dayNumber) {
      break;
    }
    var td = document.createElement("td");
    td.innerHTML = "";
    tr.appendChild(td);
  }

  var count = 1;
  for (; i <= 6; i++) {
    var td = document.createElement("td");
    td.innerHTML = count;
    count++;
    tr.appendChild(td);
  }

  table.appendChild(tr);

  // Rest of the rows

  for (var r = 3; r <= 6; r++) {
    var tr = document.createElement("tr");
    for (var i = 0; i <= 6; i++) {
      if (count > days) {
        table.appendChild(tr);
        return table;
      }
      var td = document.createElement("td");
      td.innerHTML = count;
      count++;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
