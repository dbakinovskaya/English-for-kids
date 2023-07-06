import { dom } from "./index.js";

function startGame() {
    shuffleWords();
}

function shuffleWords() {
    const audio = document.querySelectorAll("audio");
    console.log(audio);
}

export { startGame };