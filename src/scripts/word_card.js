import { cardData } from "./get_data.js";
import { dom } from "./index.js";
import { highlightActiveCategory } from "./burger_menu.js";
import { renderMainPage } from './category_page.js';

export function renderWordCards(evt) {
  const elem = evt.target;
  const idx = elem.dataset.idx;
  if (idx > 0) {
    highlightActiveCategory(idx);
    dom.cardWrapper.innerHTML = "";
    cardData[idx].forEach((item) => {
      dom.cardWrapper.innerHTML += buildWordCard(item);
    });
  } else if (idx === '0') {
    renderMainPage(cardData[0]);
  }
}

function buildWordCard(card) {
  return `<div class="word">
        <figure>
            <img src="${card.image}" alt="${card.word}">
            <figcaption>${card.word}</figcaption>
        </figure>
        <img class="pronounce" src="./icons/audio.png" alt="pronounce">
        <button class="rotate"><img src="./icons/rotate.png" alt="rotate"></button>
        <audio src="${card.audioSrc}"></audio>
    </div>`;
}
