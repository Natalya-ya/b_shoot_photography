"use strict";
//Make navigational links underlined on active page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
//Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const bodyEl = document.querySelector(".body");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
//Make mobile navigation no scroll

btnNav.addEventListener("click", () => {
  document.body.classList.toggle("no-scroll");
});
