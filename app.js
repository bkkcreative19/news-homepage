const hamburgerEle = document.querySelector(".ham");
const closeNavEle = document.querySelector(".close");
const body = document.querySelector("body");
const mobileNav = document.querySelector(".mobile-nav");

function openNav() {
  body.classList.add("is-nav-open");
  mobileNav.style.display = "flex";
}

function closeNav() {
  body.classList.remove("is-nav-open");
  mobileNav.style.display = "none";
}

hamburgerEle.addEventListener("click", openNav);
closeNavEle.addEventListener("click", closeNav);
