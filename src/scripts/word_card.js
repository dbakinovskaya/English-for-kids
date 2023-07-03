import { cardData } from "./get_data.js";
import { dom } from "./index.js";
import { highlightActiveCategory } from "./burger_menu.js";
import { renderMainPage } from "./category_page.js";

function renderWordCards(evt) {
  const elem = evt.target;
  const idx = elem.dataset.idx;
  if (idx > 0) {
    highlightActiveCategory(idx);
    dom.cardWrapper.innerHTML = "";
    cardData[idx].forEach((item) => {
      dom.cardWrapper.innerHTML += buildWordCard(item);
    });
  } else if (idx === "0") {
    renderMainPage(cardData[0]);
  }
}

function buildWordCard(card) {
  return `<div class="word">
        <figure>
            <img src="${card.image}" alt="${card.word}">
            <figcaption class="english">${card.word}</figcaption>
            <figcaption class="russian">${card.translation}</figcaption>
        </figure>
        <img class="pronounce" src="./icons/audio.png" alt="pronounce">
        <button class="rotate"><img src="./icons/rotate.png" alt="rotate"></button>
        <audio src="${card.audioSrc}"></audio>
    </div>`;
}

function playPronounce(evt) {
  const audioWrapper = evt.target.closest(".word");
  if (
    audioWrapper &&
    !audioWrapper.classList.contains("rotated") &&
    !evt.target.closest(".rotate")
  ) {
    const audio = audioWrapper.lastElementChild;
    audio.volume = 1;
    audio.play();
  }
}

function rotateCard(evt) {
  const card = evt.target.closest(".word");
  if (evt.target.closest(".rotate")) {
    card.classList.add("rotated");
    card.addEventListener("mouseleave", rotateCardBack);
  }
}

function rotateCardBack(evt) {
  const card = evt.target;
  card.classList.remove("rotated");
}

export { renderWordCards, playPronounce, rotateCard, rotateCardBack };
