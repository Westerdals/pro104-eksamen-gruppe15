// LeftBar
const leftContainer = document.getElementById("leftContainer");
const leftBarLogo = document.getElementById("leftBarLogo");
const leftList = document.getElementById("leftList");
const formContainer = document.getElementById("formContainer");

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

  leftBarLogo.style.backgroundImage = "url(/images/TabsLogo-01.png)";
  leftBarLogo.style.width = "150px";
  leftBarLogo.style.height = "100px";
  leftList.style.display = "";
  formContainer.style.display = "";
  leftContainer.style.boxShadow = "5px 0px 20px 0px #444444";
}

function leftContainerLeave() {
  leftContainer.style.width = "70px";
  leftContainer.style.transition = "0.5s";
  leftBarLogo.style.transitionDuration = "0.5s";
  leftBarLogo.style.transform = "rotateY(360deg)";

  leftBarLogo.style.backgroundImage = "url(/images/Tabs-small-logo.png)";
  leftBarLogo.style.width = "45px";
  leftBarLogo.style.height = "45px";
  leftList.style.display = "none";
  formContainer.style.display = "none";
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
