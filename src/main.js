// open menu use burger in small screens
const burger_menu = document.getElementById("burger-menu");
const menu = document.getElementById("nav-list");
burger_menu.onclick = function () {
  menu.classList.toggle("open");
};

//shrink header when make scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", ShrinkHeaders);

function ShrinkHeaders() {
  if (window.scrollY > 40) {
    header.classList.add("header--shrink");
  } else {
    header.classList.remove("header--shrink");
  }
}
