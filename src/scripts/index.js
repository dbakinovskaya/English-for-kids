import "../styles/common.css";
import "../styles/header.css";
import {showBurgerMenu, clickModeButton, closeBurgerMenu} from './burger_menu.js';
import fetch from './get_data.js';
import {getData} from './get_data.js';
export const dom = {
  burger: document.querySelector("#burger__menu"),
  menu: document.querySelector("#menu__wrapper"),
  mode: document.querySelector(".mode"),
  menuList: document.querySelector("ul"),
};

dom.menu.addEventListener("click", closeBurgerMenu);

dom.burger.addEventListener("click", showBurgerMenu);

dom.mode.addEventListener("click", clickModeButton);

getData();