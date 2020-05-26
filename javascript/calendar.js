var d = new Date(); // Creates new date

function renderDate() {
  // d.setDate(1); //
  d.setDate(1);
  var thisDay = d.getDay(); // Get's today's day (mon, tue, wed)
  var endDate = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); //End  date for the months
  var prevDates = new Date(d.getFullYear(), d.getMonth(), 0).getDate();
  var today = new Date(); // Creates new date

  //Store months in string in an array
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Gets the html from the html document
  document.getElementById("month").innerHTML =
    months[d.getMonth()] + " " + d.getFullYear();

  var cells = "";

  // Makes last months days show before the first date of this month
  for (x = thisDay; x > 0; x--) {
    cells += "<div class='prevDate'>" + (prevDates - x + 1) + "</div>";
  }

  for (i = 1; i <= endDate; i++) {
    if (
      i === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    ) {
      cells += "<div class='today'>" + i + "</div>";
    } else {
      cells += "<div>" + i + "</div>";
    }
  }

  document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para) {
  if (para === "prev") {
    d.setMonth(d.getMonth() - 1);
  } else if (para === "next") {
    d.setMonth(d.getMonth() + 1);
  }
  renderDate();
}
