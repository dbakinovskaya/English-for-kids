import { dom } from "./index.js";
import { clickModeButton } from "./change_mode.js";
import { renderMainPage } from "./category_page.js";
import { cardData } from "./get_data.js";

const counts = {
  mistakes: 0,
};

const attempt = {
  audioList: null,
  audio: null,
  word: null,
  answer: null,
};

function startGame(n) {
  if (n === attempt.audioList.length) {
    dom.answerWrapper.innerHTML = "";
    clickModeButton();

    if (counts.mistakes === 0) {
      playSignal("./audio/success.mp3");
      showGameResult("Awesome!", "./icons/success.png", "successful");
    } else {
      playSignal("./audio/failure.mp3");
      showGameResult(`Mistakes: ${counts.mistakes}`, "./icons/failed.png", "failed");
      counts.mistakes = 0;
    }
    setTimeout(() => renderMainPage(cardData[0]), 7000);
  } else {
    attempt.audio = attempt.audioList[n];
    attempt.audio.play();

    dom.cardWrapper.addEventListener("click", function Iteration(evt) {
      chooseCard(evt);
      checkCorrectness(attempt.audio);
      if (attempt.answer === "correct") {
        addAnswerIcon("./icons/true.png");
        playSignal("./audio/correct.mp3");
        makeCardInactive(evt);

        setTimeout(() => startGame(n + 1), 1000);

        dom.cardWrapper.removeEventListener("click", Iteration);
        attempt.audio = null;
        attempt.word = null;
        attempt.answer = null;
      } else if (
        attempt.answer === "mistake" &&
        !attempt.word.classList.contains("inactive")
      ) {
        playSignal("./audio/error.mp3");
        addAnswerIcon("./icons/false.png");
        counts.mistakes++;
        console.log(counts.mistakes);
      }
    });
  }
}

function shuffleWords() {
  const audio = document.querySelectorAll("audio");
  const shuffleIdx = [];
  const shuffleAudio = [];

  while (shuffleAudio.length != audio.length) {
    let idx = Math.floor(Math.random() * audio.length);
    if (!shuffleIdx.includes(idx)) {
      shuffleIdx.push(idx);
      shuffleAudio.push(audio[idx]);
    }
  }
  attempt.audioList = shuffleAudio;
}

function chooseCard(evt) {
  if (
    dom.cardWrapper.classList.contains("game__mode") &&
    !dom.repeatBtn.classList.contains(".hide")
  ) {
    const card = evt.target.closest(".word");
    if (card) {
      attempt.word = card;
    }
  }
}

function checkCorrectness(audio) {
  if (attempt.word && attempt.word.contains(audio)) {
    attempt.answer = "correct";
  } else if (attempt.word && !attempt.word.contains(audio)) {
    attempt.answer = "mistake";
  }
}

function addAnswerIcon(link) {
  cleanImageWrapper();

  const div = document.createElement("div");
  div.innerHTML = `<img src='${link}' alt='icon'/>`;
  dom.answerWrapper.appendChild(div);
}

function cleanImageWrapper() {
  const images = dom.answerWrapper.querySelectorAll("div");
  if (images.length === 8) {
    dom.answerWrapper.removeChild(images[0]);
  }
}

function repeatWord() {
  if (attempt.audio) {
    attempt.audio.play();
  }
}

function playSignal(link) {
  const sygnal = new Audio();
  sygnal.src = link;
  sygnal.play();
}

function makeCardInactive(evt) {
  const card = evt.target.closest(".word");
  const div = document.createElement("div");
  card.classList.add("inactive");
  card.appendChild(div);

  setTimeout(() => (div.style.opacity = "1"), 20);
}

function showGameResult(result, img, cls) {
  const div = document.createElement("div");
  div.className = 'results';
  div.innerHTML = `
    <p class="${cls}">${result}</p>
    <img src="${img}">`;
  dom.cardWrapper.innerHTML = "";
  dom.cardWrapper.append(div);
}

export { startGame, repeatWord, shuffleWords };
