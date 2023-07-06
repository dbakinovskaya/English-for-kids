import "../styles/common.css";
import "../styles/header_buttons.css";
import "../styles/category_cards.css";
import "../styles/word_cards.css";
import "../styles/burger_menu.css";

import { showBurgerMenu, closeBurgerMenu } from './burger_menu.js';
import {  clickModeButton, clickPlayButton } from './change_mode.js';
import { getData, cardData } from './get_data.js';
import { renderMainPage } from "./category_page.js";
import { renderWordCards, playPronounce, rotateCard } from "./word_card.js";


export const dom = {
  body: document.querySelector("body"),
  content: document.querySelector("main"),
  logo: document.querySelector("h1"),
  burger: document.querySelector("#burger__menu"),
  menu: document.querySelector("#menu__wrapper"),
  mode: document.querySelector(".mode__wrapper"),
  startBtn: document.querySelector(".start__btn"),
  repeatBtn: document.querySelector(".repeat__btn"),
  modeBtn: document.querySelector(".mode"),
  menuList: document.querySelector("ul"),
  cardWrapper: document.querySelector(".card__wrapper"),
};

dom.menu.addEventListener("click", closeBurgerMenu);

dom.logo.addEventListener("click", function(){
  renderMainPage(cardData[0]);
});

dom.burger.addEventListener("click", showBurgerMenu);

dom.modeBtn.addEventListener("click", clickModeButton);

dom.startBtn.addEventListener("click", clickPlayButton);

dom.content.addEventListener("click", renderWordCards);

dom.cardWrapper.addEventListener("click", playPronounce);

dom.cardWrapper.addEventListener("click", rotateCard);

getData();