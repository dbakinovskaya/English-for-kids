import { dom } from "./dom.js";
import { startGame, shuffleWords } from "./game_mode.js";

const { mode, cardWrapper, startBtn, repeatBtn } = dom;

function clickModeButton() {
  if (!mode.classList.contains("play")) {
    mode.classList.add("play");
    cardWrapper.classList.add("game__mode");
    startBtn.classList.remove("hide");
  } else {
    mode.classList.remove("play");
    cardWrapper.classList.remove("game__mode");
    checkBtnVisibility();
  }
}

function checkBtnVisibility() {
  if (
    !startBtn.classList.contains("hide") ||
    !repeatBtn.classList.contains("hide")
  ) {
    startBtn.classList.add("hide");
    repeatBtn.classList.add("hide");
  }
}

function clickPlayButton() {
  const cards = document.querySelectorAll(".category");
  if (!isWordsPage()) {
    cards.forEach((card) => {
      showHint(card);
      setTimeout(() => deleteHint(card), 1000);
    });
  } else if (isWordsPage()) {
    mode.classList.add("hide");
    changeButton();
    shuffleWords();
    startGame();
  }
}

function isWordsPage() {
  const idx = document.querySelector(".active__link").dataset.idx;
  const difficultWords = document.querySelector("#difficult");
  if (idx === "0" && !cardWrapper.querySelector(".hint") && !difficultWords) {
    return false;
  } else if (idx > 0 || difficultWords) {
    return true;
  }
}

function changeButton() {
  startBtn.classList.add("hide");
  repeatBtn.classList.remove("hide");
}

function showHint(card) {
  let wrapper = document.createElement("div");
  wrapper.className = "hint";
  wrapper.innerHTML = "<p>&#9755 Click me!</p>";
  card.appendChild(wrapper);

  setTimeout(function () {
    wrapper.classList.add("show");
  });
}

function deleteHint(card) {
  let hint = card.querySelector(".hint");
  hint.classList.remove("show");
  setTimeout(function () {
    card.removeChild(hint);
  }, 300);
}
export { clickModeButton, clickPlayButton };
