import { dom } from "./dom.js";

const { body, burger, menu } = dom;

function showBurgerMenu() {
  body.style.marginRight = getScrollWidth() + "px";
  burger.classList.toggle("active__menu");
  menu.classList.toggle("active__menu");
  body.classList.toggle("open__burger");
}

function highlightActiveCategory(idx) {
  const currentLink = document.querySelector(".active__link");
  const newLink = document.querySelector(`[data-idx='${idx}']`);
  currentLink.classList.remove("active__link");
  newLink.classList.add("active__link");
}

function closeBurgerMenu({elem}) {
  if (elem.closest("li") || elem.id == "menu__wrapper") {
    burger.classList.remove("active__menu");
    menu.classList.remove("active__menu");
    body.classList.remove("open__burger");
  }
}

function getScrollWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export { showBurgerMenu, closeBurgerMenu, highlightActiveCategory };
