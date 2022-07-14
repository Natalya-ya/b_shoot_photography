"use strict";
//Make overflow image work
const sectionEl = document.querySelector(".section-photos");
const btnImg = document.querySelector(".btnImg");
const btnImg2 = document.querySelector(".btnImg2");
const btnImg3 = document.querySelector(".btnImg3");
const btnImg4 = document.querySelector(".btnImg4");
const btnImg5 = document.querySelector(".btnImg5");
const btnImg6 = document.querySelector(".btnImg6");
const btnImg7 = document.querySelector(".btnImg7");
const btnImg8 = document.querySelector(".btnImg8");

const btnImgClose = document.querySelector(".btn-overflow");
const btnImgClose2 = document.querySelector(".btn-overflow2");
const btnImgClose3 = document.querySelector(".btn-overflow3");
const btnImgClose4 = document.querySelector(".btn-overflow4");
const btnImgClose5 = document.querySelector(".btn-overflow5");
const btnImgClose6 = document.querySelector(".btn-overflow6");
const btnImgClose7 = document.querySelector(".btn-overflow7");
const btnImgClose8 = document.querySelector(".btn-overflow8");

const overflowdiv = document.querySelector(".overflow-img-div");
const overflowdiv2 = document.querySelector(".overflow-img-div2");
const overflowdiv3 = document.querySelector(".overflow-img-div3");
const overflowdiv4 = document.querySelector(".overflow-img-div4");
const overflowdiv5 = document.querySelector(".overflow-img-div5");
const overflowdiv6 = document.querySelector(".overflow-img-div6");
const overflowdiv7 = document.querySelector(".overflow-img-div7");
const overflowdiv8 = document.querySelector(".overflow-img-div8");

btnImg.addEventListener("click", function () {
  sectionEl.classList.add("img-open");
});
btnImg2.addEventListener("click", function () {
  sectionEl.classList.add("img-open2");
});
btnImg3.addEventListener("click", function () {
  sectionEl.classList.add("img-open3");
});
btnImg4.addEventListener("click", function () {
  sectionEl.classList.add("img-open4");
});
btnImg5.addEventListener("click", function () {
  sectionEl.classList.add("img-open5");
});
btnImg6.addEventListener("click", function () {
  sectionEl.classList.add("img-open6");
});
btnImg7.addEventListener("click", function () {
  sectionEl.classList.add("img-open7");
});
btnImg8.addEventListener("click", function () {
  sectionEl.classList.add("img-open8");
});

btnImgClose.addEventListener("click", function () {
  sectionEl.classList.remove("img-open");
  document.body.classList.remove("no-scroll");
});
btnImgClose2.addEventListener("click", function () {
  sectionEl.classList.remove("img-open2");
  document.body.classList.remove("no-scroll");
});
btnImgClose3.addEventListener("click", function () {
  sectionEl.classList.remove("img-open3");
  document.body.classList.remove("no-scroll");
});

btnImgClose4.addEventListener("click", function () {
  sectionEl.classList.remove("img-open4");
  document.body.classList.remove("no-scroll");
});

btnImgClose5.addEventListener("click", function () {
  sectionEl.classList.remove("img-open5");
  document.body.classList.remove("no-scroll");
});

btnImgClose6.addEventListener("click", function () {
  sectionEl.classList.remove("img-open6");
  document.body.classList.remove("no-scroll");
});

btnImgClose7.addEventListener("click", function () {
  sectionEl.classList.remove("img-open7");
  document.body.classList.remove("no-scroll");
});

btnImgClose8.addEventListener("click", function () {
  sectionEl.classList.remove("img-open8");
  document.body.classList.remove("no-scroll");
});

btnImg.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});
btnImg2.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});
btnImg3.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});
btnImg4.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});
btnImg5.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});
btnImg6.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});
btnImg7.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});
btnImg8.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});

overflowdiv.addEventListener("click", function () {
  sectionEl.classList.remove("img-open");
  document.body.classList.remove("no-scroll");
});
overflowdiv2.addEventListener("click", function () {
  sectionEl.classList.remove("img-open2");
  document.body.classList.remove("no-scroll");
});
overflowdiv3.addEventListener("click", function () {
  sectionEl.classList.remove("img-open3");
  document.body.classList.remove("no-scroll");
});
overflowdiv4.addEventListener("click", function () {
  sectionEl.classList.remove("img-open4");
  document.body.classList.remove("no-scroll");
});
overflowdiv5.addEventListener("click", function () {
  sectionEl.classList.remove("img-open5");
  document.body.classList.remove("no-scroll");
});
overflowdiv6.addEventListener("click", function () {
  sectionEl.classList.remove("img-open6");
  document.body.classList.remove("no-scroll");
});
overflowdiv7.addEventListener("click", function () {
  sectionEl.classList.remove("img-open7");
  document.body.classList.remove("no-scroll");
});
overflowdiv8.addEventListener("click", function () {
  sectionEl.classList.remove("img-open8");
  document.body.classList.remove("no-scroll");
});

//Make slider work
