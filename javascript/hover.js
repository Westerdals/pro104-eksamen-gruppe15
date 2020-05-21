// LeftBar
const leftContainer = document.getElementById("leftContainer");
const leftBarLogo = document.getElementById("leftBarLogo");
const leftList = document.getElementById("leftList");
const formContainer = document.getElementById("formContainer");
const calendarContainer = document.getElementById("calendarContainer");
const projectsBox = document.getElementById("projectsBox");

// MiddleBar
const middleContainer = document.getElementById("middleContainer");

leftContainer.addEventListener("mouseover", (e) => {
  e.preventDefault();
  leftContainerHover();
  middleBarHover();
});

leftContainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  leftContainerLeave();
  middleBarLeave();
});

function leftContainerHover() {
  leftContainer.style.width = "300px";

  leftContainer.style.transition = "0.3s";

  leftBarLogo.style.transitionDuration = "0.0s";
  leftBarLogo.style.transform = "rotateY(0deg)";

  leftBarLogo.style.backgroundImage = "url(/images/Orange-tabs-02.png)";
  leftBarLogo.style.width = "160px";
  leftBarLogo.style.height = "160px";
  leftList.style.display = "";
  formContainer.style.display = "";
  leftContainer.style.boxShadow = "5px 0px 20px 0px #444444";
  calendarContainer.style.display = "block";
  projectsBox.style.display = "block"
}

function leftContainerLeave() {
  leftContainer.style.width = "70px";
  leftContainer.style.transition = "0.5s";
  leftBarLogo.style.transitionDuration = "0.5s";
  leftBarLogo.style.transform = "rotateY(360deg)";

  leftBarLogo.style.backgroundImage = "url(/images/Orange-tabs-01.png)";
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

rightContainer.addEventListener("mouseover", (e) => {
  e.preventDefault();
  rightContainerHover();
});

rightContainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  rightContainerLeave();
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
}
