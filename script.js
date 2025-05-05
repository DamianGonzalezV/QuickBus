"use strict";

const novaBtn = document.querySelector(".nova-btn");
const vexelBtn = document.querySelector(".vexel-btn");
const stellarBtn = document.querySelector(".stellar-btn");

const reserveCard = document.querySelector(".reserve-bus-card");

function changeColor(color) {
  reserveCard.style.boxShadow = `0 5px 6px ${color}`;
}

function iconsActive() {
  document.querySelector(`${this.firstClass}`).classList.toggle("hide");
  document.querySelector(`${this.secondClass}`).classList.toggle("hide");
}

function iconsOff() {
  document.querySelector(`${this.firstClass}`).classList.remove("hide");
  document.querySelector(`${this.secondClass}`).classList.add("hide");
}

const novaIconsActive = iconsActive.bind({
  firstClass: ".ph-rocket",
  secondClass: ".ph-rocket-launch",
});

const novaIconOff = iconsOff.bind({
  firstClass: ".ph-rocket",
  secondClass: ".ph-rocket-launch",
});

const stellarIconsActive = iconsActive.bind({
  firstClass: ".ph-airplane-taxiing",
  secondClass: ".ph-airplane-takeoff",
});

const stellarIconOff = iconsOff.bind({
  firstClass: ".ph-airplane-taxiing",
  secondClass: ".ph-airplane-takeoff",
});

const vexelIconsActive = iconsActive.bind({
  firstClass: ".ph-bus",
  secondClass: ".ph-van",
});

const vexelIconOff = iconsOff.bind({
  firstClass: ".ph-bus",
  secondClass: ".ph-van",
});

novaBtn.addEventListener("click", () => {
  changeColor("rgb(81, 219, 31)");
  novaIconsActive();
  stellarIconOff();
  vexelIconOff();
});

vexelBtn.addEventListener("click", () => {
  changeColor("rgb(255, 108, 10)");
  vexelIconsActive();
  novaIconOff();
  stellarIconOff();
});

stellarBtn.addEventListener("click", () => {
  changeColor("rgb(214, 66, 255)");
  novaIconOff();
  stellarIconsActive();
  vexelIconOff();
});
