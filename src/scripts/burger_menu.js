import { dom } from "./index.js";

function showBurgerMenu() {
  const scroll = scrollWidth();
  dom.body.style.marginRight = scroll + "px";
  console.log(scroll)
  dom.burger.classList.toggle("active__menu");
  dom.menu.classList.toggle("active__menu");
  dom.body.classList.toggle("open__burger");
}

function highlightActiveCategory(idx) {
  const currentLink = document.querySelector(".active__link");
  const newLink = document.querySelector(`[data-idx='${idx}']`);
  currentLink.classList.remove("active__link");
  newLink.classList.add("active__link");
}

function closeBurgerMenu(evt) {
  const elem = evt.target;
  if (elem.closest("li") || elem.id == "menu__wrapper") {
    dom.burger.classList.remove("active__menu");
    dom.menu.classList.remove("active__menu");
    dom.body.classList.remove("open__burger");
  }
}

function scrollWidth() {
  const scroll = window.innerWidth - document.documentElement.clientWidth;
  return scroll;
}

export { showBurgerMenu, closeBurgerMenu, highlightActiveCategory };
