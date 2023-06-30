import { dom } from "./index.js";

function showBurgerMenu() {
  dom.burger.classList.toggle("active__menu");
  dom.menu.classList.toggle("active__menu");
}

function clickModeButton() {
  dom.mode.classList.toggle("play");
}

function closeBurgerMenu(evt) {
  const elem = evt.target;
  if (!elem.closest("nav")) {
    dom.burger.classList.remove("active__menu");
    dom.menu.classList.remove("active__menu");
  }
}

export {showBurgerMenu, clickModeButton, closeBurgerMenu};