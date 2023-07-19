import "../styles/common.css";
import "../styles/header_buttons.css";
import "../styles/category_cards.css";
import "../styles/word_cards.css";
import "../styles/burger_menu.css";
import "../styles/game_attributes.css";
import "../styles/game_results.css";
import "../styles/stats_table.css";

import { dom } from "./dom.js";
import { showBurgerMenu, closeBurgerMenu } from "./burger_menu.js";
import { clickModeButton, clickPlayButton } from "./change_mode.js";
import { getData, cardData } from "./get_data.js";
import { renderMainPage } from "./category_page.js";
import { renderWordCards, playPronounce, rotateCard } from "./word_card.js";
import { repeatWord } from "./game_mode.js";
import {
  showStats,
  resetStats,
  sortStats,
  repeatDifficultWords,
} from "./stats.js";

const {
  menu,
  logo,
  burger,
  modeBtn,
  statsBtn,
  startBtn,
  repeatBtn,
  content,
  cardWrapper,
  resetBtn,
  tableHead,
  repeatWordsBtn,
} = dom;

menu.addEventListener("click", closeBurgerMenu);

logo.addEventListener("click", function () {
  renderMainPage(cardData[0]);
});

burger.addEventListener("click", showBurgerMenu);

modeBtn.addEventListener("click", clickModeButton);

statsBtn.addEventListener("click", showStats);

startBtn.addEventListener("click", clickPlayButton);

repeatBtn.addEventListener("click", repeatWord);

content.addEventListener("click", renderWordCards);

cardWrapper.addEventListener("click", playPronounce);

cardWrapper.addEventListener("click", rotateCard);

resetBtn.addEventListener("click", resetStats);

tableHead.addEventListener("click", sortStats);

repeatWordsBtn.addEventListener("click", repeatDifficultWords);

getData();
