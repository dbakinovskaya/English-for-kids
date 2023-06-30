import { dom } from "./index.js";

function showBurgerMenu() {
  dom.burger.classList.toggle("active__menu");
  dom.menu.classList.toggle("active__menu");
  dom.body.classList.toggle("open__burger");
}

function clickModeButton() {
  dom.mode.classList.toggle("play");
} //перенести в другой модуль

function closeBurgerMenu(evt) {
  const elem = evt.target;
  if (!elem.closest("nav")) {
    dom.burger.classList.remove("active__menu");
    dom.menu.classList.remove("active__menu");
    dom.body.classList.remove("open__burger");
  }
}

export {showBurgerMenu, clickModeButton, closeBurgerMenu};