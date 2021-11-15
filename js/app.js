const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
  console.log("hamburger was clicked");
}

hamburgerButton.addEventListener("click", toggleButton);
