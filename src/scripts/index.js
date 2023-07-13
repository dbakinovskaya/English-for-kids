import "../styles/common.css";
import "../styles/header_buttons.css";
import "../styles/category_cards.css";
import "../styles/word_cards.css";
import "../styles/burger_menu.css";
import "../styles/game_attributes.css";
import "../styles/game_results.css";
import "../styles/stats_table.css";

import { showBurgerMenu, closeBurgerMenu } from "./burger_menu.js";
import { clickModeButton, clickPlayButton } from "./change_mode.js";
import { getData, cardData } from "./get_data.js";
import { renderMainPage } from "./category_page.js";
import { renderWordCards, playPronounce, rotateCard } from "./word_card.js";
import { repeatWord } from "./game_mode.js";
import { showStats, resetStats, sortStats } from "./stats.js";

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
  statsBtn: document.querySelector(".stats"),
  menuList: document.querySelector("ul"),
  cardWrapper: document.querySelector(".card__wrapper"),
  answerWrapper: document.querySelector(".answer__wrapper"),
  statsWrapper: document.querySelector(".stats__wrapper"),
  statsBtnsWrapper: document.querySelector(".stats__btns"),
  resetBtn: document.querySelector(".reset"),
  repeatWordsBtn: document.querySelector(".repeat__words"),
  tableHead: document.querySelector("thead"),
  tableBody: document.querySelector("tbody"),
};

dom.menu.addEventListener("click", closeBurgerMenu);

dom.logo.addEventListener("click", function () {
  renderMainPage(cardData[0]);
});

dom.burger.addEventListener("click", showBurgerMenu);

dom.modeBtn.addEventListener("click", clickModeButton);

dom.statsBtn.addEventListener("click", showStats);

dom.startBtn.addEventListener("click", clickPlayButton);

dom.repeatBtn.addEventListener("click", repeatWord);

dom.content.addEventListener("click", renderWordCards);

dom.cardWrapper.addEventListener("click", playPronounce);

dom.cardWrapper.addEventListener("click", rotateCard);

dom.resetBtn.addEventListener("click", resetStats);

dom.tableHead.addEventListener("click", sortStats);

getData();
