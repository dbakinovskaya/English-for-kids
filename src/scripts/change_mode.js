import { dom } from "./index.js";
import { startGame } from "./game_mode.js";

function clickModeButton() {
  if (!dom.mode.classList.contains("play")) {
    dom.mode.classList.add("play");
    dom.cardWrapper.classList.add("game__mode");
    dom.startBtn.classList.remove("hide");
  } else if (dom.mode.classList.contains("play")) {
    dom.mode.classList.remove("play");
    dom.cardWrapper.classList.remove("game__mode");

    if (!dom.startBtn.classList.contains("hide") || !dom.repeatBtn.classList.contains("hide")) {
      dom.startBtn.classList.add("hide")
      dom.repeatBtn.classList.add("hide")
    }
  }
}

function clickPlayButton() {
  const idx = document.querySelector(".active__link").dataset.idx;
  const cards = document.querySelectorAll(".category");
  const words = document.querySelectorAll(".word");

  if (idx === "0" && !dom.cardWrapper.querySelector(".hint")) {
    cards.forEach((card) => {
      showHint(card);
      setTimeout(function () {
        deleteHint(card);
      }, 1000);
    });
  } else if (idx > 0) {
    changeButton();
    startGame();
  }
}

function changeButton() {
  dom.startBtn.classList.add("hide");
  dom.repeatBtn.classList.remove("hide");
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
