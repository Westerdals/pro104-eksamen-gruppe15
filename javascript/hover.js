// LeftBar
const leftContainer = document.getElementById("leftContainer");
const leftBarLogo = document.getElementById("leftBarLogo");
const leftList = document.getElementById("leftList");
const formContainer = document.getElementById("formContainer");
const calendarContainer = document.getElementById("calendarContainer");
const projectsBox = document.getElementById("projectsBox");
const leftListLimitContainer = document.getElementById(
  "leftListLimitContainer"
);

// MiddleBar
const middleContainer = document.getElementById("middleContainer");
const openLeftBar = document.getElementById("openLeftBar");
const closeLeftBar = document.getElementById("closeLeftBar");

function openLeftBarF(event) {
  event.preventDefault;
  leftContainerHover();
  middleBarHover();
  closeLeftBar.style.display = "block";
  openLeftBar.style.display = "none";
  leftListLimitContainer.style.display = "block";
}

function closeLeftBarF(event) {
  event.preventDefault();
  leftContainerLeave();
  middleBarLeave();
  closeLeftBar.style.display = "none";
  openLeftBar.style.display = "block";
  leftListLimitContainer.style.display = "none";
}

function leftContainerHover() {
  leftContainer.style.width = "300px";

  leftContainer.style.transition = "0.3s";

  leftBarLogo.style.transitionDuration = "0.0s";
  leftBarLogo.style.transform = "rotateY(0deg)";

  leftBarLogo.style.backgroundImage = "url(/images/orange-tabs-logo-square-02.png)";
  leftBarLogo.style.width = "160px";
  leftBarLogo.style.height = "160px";
  leftList.style.display = "";
  formContainer.style.display = "";
  leftContainer.style.boxShadow = "5px 0px 20px 0px #444444";
  calendarContainer.style.display = "block";
  projectsBox.style.display = "block";
}

function leftContainerLeave() {
  leftContainer.style.width = "70px";
  leftContainer.style.transition = "0.5s";
  leftBarLogo.style.transitionDuration = "0.5s";
  leftBarLogo.style.transform = "rotateY(360deg)";

  leftBarLogo.style.backgroundImage = "url(/images/orange-tabs-logo-square-01.png)";
  leftBarLogo.style.width = "50px";
  leftBarLogo.style.height = "50px";
  leftList.style.display = "none";
  formContainer.style.display = "none";
  calendarContainer.style.display = "none";
  projectsBox.style.display = "none";
}

function middleBarHover() {
  middleContainer.style.width = "inherit";
  middleContainer.style.marginLeft = "310px";
  middleContainer.style.transition = "0.3s";
}

function middleBarLeave() {
  middleContainer.style.width = "inherit";
  middleContainer.style.marginLeft = "70px";
  middleContainer.style.transition = "0.5s";
}

// Right Container Hover
const rightContainer = document.getElementById("rightContainer");
const profilePicture = document.getElementById("profilePicture");
const username = document.getElementById("username");
const footerRightBar = document.getElementById("footerRightBar");
const notifyRemin = document.getElementById("remin");
const notContainer = document.getElementById("nContainer");
const logBtn = document.getElementById("logOut");

rightContainer.addEventListener("mouseover", (e) => {
  e.preventDefault();
  rightContainerHover();
});

rightContainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  rightContainerLeave();
  changeImageFormContainer.style.display = "none";
});

function rightContainerHover() {
  rightContainer.style.width = "300px";
  rightContainer.style.transition = "0.3s";
  profilePicture.style.width = "70px";
  profilePicture.style.height = "70px";
  profilePicture.style.transition = "0.3s";
  username.style.display = "block";
  username.style.transition = "0.3s";
  footerRightBar.style.display = "grid";
  footerRightBar.style.transition = "0.3s";
  notifyRemin.style.left = "89%";
  notContainer.style.display = "block";
  notContainer.style.transition = "0.3s";
  logBtn.style.display = "block";
}

function rightContainerLeave() {
  rightContainer.style.width = "70px";
  profilePicture.style.width = "50px";
  profilePicture.style.height = "50px";
  profilePicture.style.transition = "0.3s";
  username.style.display = "none";
  username.style.transition = "0.3s";
  footerRightBar.style.display = "none";
  footerRightBar.style.transition = "0.3s";
  notContainer.style.display = "none";
  notContainer.style.transition = "0.3s";
  logBtn.style.display = "none";
}

// Open Calender

const calenderContainerAll = document.getElementById("calendarContainer");

const calenderMonth = document.getElementsByClassName("month");
const calanderWeekends = document.getElementsByClassName("weekends");
const calenderDays = document.getElementsByClassName("days");
const closeCalenderButton = document.getElementById("closeCalenderButton");
const openCalenderButton = document.getElementById("openCalenderButton");

const monthText = document.getElementById("month");

function closeCalender(event) {
  event.preventDefault();
  console.log("testtesttest");
  calenderMin();
  closeCalenderButton.style.display = "none";
  openCalenderButton.style.display = "block";
}

function openCalender(event) {
  event.preventDefault();
  calenderMax();
  openCalenderButton.style.display = "none";
  closeCalenderButton.style.display = "block";
}

function calenderMin() {
  calenderMonth[0].style.top = "0";
  calanderWeekends[0].style.display = "none";
  calenderDays[0].style.display = "none";
  calenderContainerAll.style.height = "120px";
  monthText.style.marginTop = "27px";
}

function calenderMax() {
  calenderMonth[0].style.top = "0";
  calanderWeekends[0].style.display = "flex";
  calenderDays[0].style.display = "flex";
  calenderContainerAll.style.height = "450px";
  monthText.style.marginTop = "-127px";
}
