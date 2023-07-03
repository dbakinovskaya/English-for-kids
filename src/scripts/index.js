import "../styles/common.css";
import "../styles/header.css";
import "../styles/category_cards.css";
import "../styles/word_cards.css";

import { showBurgerMenu, clickModeButton, closeBurgerMenu } from './burger_menu.js';
import { getData, cardData } from './get_data.js';
import { renderMainPage } from "./category_page.js";
import { renderWordCards, playPronounce, rotateCard, rotateCardBack } from "./word_card.js";


export const dom = {
  body: document.querySelector("body"),
  content: document.querySelector("main"),
  logo: document.querySelector("h1"),
  burger: document.querySelector("#burger__menu"),
  menu: document.querySelector("#menu__wrapper"),
  mode: document.querySelector(".mode__wrapper"),
  modeButton: document.querySelector(".mode"),
  menuList: document.querySelector("ul"),
  cardWrapper: document.querySelector(".card__wrapper"),
};

dom.menu.addEventListener("click", closeBurgerMenu);

dom.logo.addEventListener("click", function(){
  renderMainPage(cardData[0]);
});

dom.burger.addEventListener("click", showBurgerMenu);

dom.modeButton.addEventListener("click", clickModeButton);

dom.content.addEventListener("click", renderWordCards);

dom.cardWrapper.addEventListener("click", playPronounce);

dom.cardWrapper.addEventListener("click", rotateCard);

getData();