import "../styles/common.css";
import "../styles/header.css";
import "../styles/category_cards.css";

import {showBurgerMenu, clickModeButton, closeBurgerMenu} from './burger_menu.js';
import {getData} from './get_data.js';


export const dom = {
  body: document.querySelector("body"),
  burger: document.querySelector("#burger__menu"),
  menu: document.querySelector("#menu__wrapper"),
  mode: document.querySelector(".mode"),
  menuList: document.querySelector("ul"),
  cardWrapper: document.querySelector(".card__wrapper"),
};

dom.menu.addEventListener("click", closeBurgerMenu);

dom.burger.addEventListener("click", showBurgerMenu);

dom.mode.addEventListener("click", clickModeButton);

getData();