import { dom } from "./index.js";
import { cardData } from "./get_data";

function showStats() {
    if (!dom.statsWrapper.classList.contains("active")) {
        dom.mode.classList.add("hide");
        dom.statsWrapper.classList.add("active");
        dom.cardWrapper.innerHTML="";
    }
}

function renderStatsPage(n, idx) {
  if (n === cardData.length) {
    return;
  } else {
    addDataInStorage(idx)
    cardData[n].forEach((card) => {
      dom.tableBody.innerHTML += buildTableRow(card, idx);
    });
    renderStatsPage(n + 1, idx + 1);
  }
}

function buildTableRow(word, categoryIdx) {
    const storageData = JSON.parse(localStorage[word.word])
  return `<tr>
      <td>${word.word}</td>
      <td>${word.translation}</td>
      <td>${cardData[0][categoryIdx].category}</td>
      <td>${storageData.clicks}</td>
      <td>${storageData.correct}</td>
      <td>${storageData.mistakes}</td>
      <td>${storageData.percentage}</td>
    </tr>`;
}

function addDataInStorage(n) {
  if (n === cardData.length) {
    return;
  } else {
    cardData[n].forEach((card) => {
        if (!localStorage.getItem(card.word))
      localStorage.setItem(
        `${card.word}`,
        JSON.stringify({
          clicks: 0,
          correct: 0,
          mistakes: 0,
          percentage: 0.00,
        })
      );
    });
    addDataInStorage(n + 1);
  }
}

function setStats(card, action) {
    const storageKey = card.querySelector('figcaption').dataset.eng;
    const storageData = JSON.parse(localStorage[storageKey]);
    storageData[action]++;
    storageData.percentage = (Math.round(100/(storageData.mistakes+storageData.correct)*storageData.correct));
    localStorage.setItem(storageKey, JSON.stringify(storageData))
}

export { showStats, renderStatsPage, setStats };
