"use strict";

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
