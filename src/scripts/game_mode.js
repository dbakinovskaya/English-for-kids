import { dom } from "./dom.js";
import { clickModeButton } from "./change_mode.js";
import { renderMainPage } from "./category_page.js";
import { cardData } from "./get_data.js";
import { setStats } from "./stats.js";

const { answerWrapper, cardWrapper, repeatBtn } = dom;

let { mistakes, iteration, maxIconsQuantityconsQuantity} = {
  mistakes: 0,
  iteration: 0,
  maxIconsQuantity: 8,
};

let { audioList, audio, word, answer } = {
  audioList: null,
  audio: null,
  word: null,
  answer: null,
};

function startGame() {
  if (iteration === audioList.length) {
    answerWrapper.innerHTML = "";
    clickModeButton();
    showResults();
    iteration = 0;
  } else {
    audio = audioList[iteration];
    audio.play();
    cardWrapper.addEventListener("click", startIteration);
  }
}

function startIteration(evt) {
  chooseCard(evt);
  checkCorrectness(audio);
  addAnswer(evt);
}

function addAnswer(evt) {
  if (answer === "correct") {
    makeCardInactive(evt);
    addCorrectAnswer();
    cardWrapper.removeEventListener("click", startIteration);
    iteration++;
    setTimeout(() => startGame(), 1000);
  } else if (answer === "mistake" && !word.classList.contains("inactive")) {
    addWrongAnswer();
  }
}

function addCorrectAnswer() {
  addAnswerIcon("./icons/true.png");
  playSignal("./audio/correct.mp3");
  setStats(word, "correct");
  audio = null;
  word = null;
  answer = null;
}

function addWrongAnswer() {
  playSignal("./audio/error.mp3");
  addAnswerIcon("./icons/false.png");
  setStats(audio.closest(".word"), "mistakes");
  mistakes++;
}

function showResults() {
  if (mistakes === 0) {
    playSignal("./audio/success.mp3");
    showGameResult("Awesome!", "./icons/success.png", "successful");
  } else {
    playSignal("./audio/failure.mp3");
    showGameResult(`Mistakes: ${mistakes}`, "./icons/failed.png", "failed");
    mistakes = 0;
  }
  setTimeout(() => renderMainPage(cardData[0]), 3000);
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
  audioList = shuffleAudio;
}

function chooseCard(evt) {
  if (
    cardWrapper.classList.contains("game__mode") &&
    !repeatBtn.classList.contains(".hide")
  ) {
    const card = evt.target.closest(".word");
    if (card) {
      word = card;
    }
  }
}

function checkCorrectness(audio) {
  if (word && word.contains(audio)) {
    answer = "correct";
  } else {
    answer = "mistake";
  }
}

function addAnswerIcon(link) {
  cleanImageWrapper();
  const div = document.createElement("div");
  div.innerHTML = `<img src='${link}' alt='icon'/>`;
  answerWrapper.appendChild(div);
}

function cleanImageWrapper() {
  const images = answerWrapper.querySelectorAll("div");
  if (images.length === maxIconsQuantity) {
    answerWrapper.removeChild(images[0]);
  }
}

function repeatWord() {
  if (audio) {
    audio.play();
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
  div.className = "results";
  div.innerHTML = `
    <p class="${cls}">${result}</p>
    <img src="${img}">`;
  cardWrapper.innerHTML = "";
  cardWrapper.append(div);
}

export { startGame, repeatWord, shuffleWords };
