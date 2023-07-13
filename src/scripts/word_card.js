import { cardData } from "./get_data.js";
import { dom } from "./index.js";
import { highlightActiveCategory } from "./burger_menu.js";
import { renderMainPage } from "./category_page.js";
import { setStats } from "./stats.js";

function renderWordCards(evt) {
  const elem = evt.target;
  const idx = elem.dataset.idx;
  if (idx > 0) {
    highlightActiveCategory(idx);
    dom.cardWrapper.innerHTML = "";
    cardData[idx].forEach((item) => {
      dom.cardWrapper.innerHTML += buildWordCard(item);
    });
    if (dom.statsWrapper.classList.contains("active")) {
      dom.statsWrapper.classList.remove("active");
      dom.statsBtnsWrapper.classList.remove("active");
      dom.mode.classList.remove("hide");
    }
  } else if (idx === "0") {
    renderMainPage(cardData[0]);
  }
}

function buildWordCard(card) {
  return `<div class="word">
        <figure>
          <img src="${card.image}" alt="${card.word}">
          <figcaption data-eng="${card.word}" data-rus="${card.translation}">
            ${card.word}
          </figcaption>
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
    !dom.cardWrapper.classList.contains("game__mode") &&
    !audioWrapper.classList.contains("rotated") &&
    !evt.target.closest(".rotate")
  ) {
    const audio = audioWrapper.lastElementChild;
    audio.volume = 1;
    audio.play();
    setStats(audioWrapper, 'clicks')
  }
}

function rotateCard(evt) {
  const card = evt.target.closest(".word");
  if (card && evt.target.closest(".rotate")) {
    setStats(card, 'clicks');
    const translate = card.querySelector('figcaption');
    translate.style.color = 'white';
    translate.innerText = translate.dataset.rus;
    card.classList.add("rotated");
    card.addEventListener("mouseleave", rotateCardBack);

    setTimeout(function() {
      translate.style.color = 'black';
    }, 220);
  }
}

function rotateCardBack(evt) {
  const card = evt.target.closest(".rotated");

  if(card) {
    card.classList.remove("rotated");
    const translate = card.querySelector("figcaption");
    translate.style.color = 'white';
    translate.innerText = translate.dataset.eng;
    card.removeEventListener("mouseleave", rotateCardBack);

    setTimeout(function() {
      translate.style.color = 'black';
    }, 200);
  }
}

export { renderWordCards, playPronounce, rotateCard };