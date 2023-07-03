import { dom } from "./index.js";

function showBurgerMenu() {
  dom.burger.classList.toggle("active__menu");
  dom.menu.classList.toggle("active__menu");
  dom.body.classList.toggle("open__burger");
}

function clickModeButton() {
  dom.mode.classList.toggle("play");
} //перенести в другой модуль

function highlightActiveCategory(idx) {
  const currentLink = document.querySelector(".active__link");
  const newLink = document.querySelector(`[data-idx='${idx}']`);
  currentLink.classList.remove('active__link');
  newLink.classList.add('active__link');
}

function closeBurgerMenu(evt) {
  const elem = evt.target;
  if (elem.closest("li") || elem.id == ('menu__wrapper')) {
    dom.burger.classList.remove("active__menu");
    dom.menu.classList.remove("active__menu");
    dom.body.classList.remove("open__burger");
  }
}

export {showBurgerMenu, clickModeButton, closeBurgerMenu, highlightActiveCategory};