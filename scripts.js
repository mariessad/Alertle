let hamburgerMenu = document.querySelector(".hamburger-icon");
console.log(hamburgerMenu);
let navUl = document.querySelector(".nav-ul");

function toggleNav() {
  navUl.classList.toggle("open");
  console.log("WHAT");
}

hamburgerMenu.addEventListener("click", toggleNav);
