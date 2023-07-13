import { dom } from "./index.js";
import { cardData } from "./get_data";

function showStats() {
  if (!dom.statsWrapper.classList.contains("active")) {
    dom.mode.classList.add("hide");
    dom.statsWrapper.classList.add("active");
    dom.statsBtnsWrapper.classList.add("active");
    dom.cardWrapper.innerHTML = "";
    dom.tableBody.innerHTML = "";
    renderStatsPage(1, 0);
  }
}

function renderStatsPage(n, idx) {
  if (n === cardData.length) {
    return;
  } else {
    addDataInStorage(n);
    cardData[n].forEach((card) => {
      dom.tableBody.innerHTML += buildTableRow(card, idx);
    });
    renderStatsPage(n + 1, idx + 1);
  }
}

function buildTableRow(word, categoryIdx) {
  const storageData = JSON.parse(localStorage[word.word]);
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
            percentage: 0,
          })
        );
    });
    addDataInStorage(n + 1);
  }
}

function setStats(card, action) {
  const storageKey = card.querySelector("figcaption").dataset.eng;
  const storageData = JSON.parse(localStorage[storageKey]);
  storageData[action]++;
  storageData.percentage = Number(
    Math.round(
      (100 / (storageData.mistakes + storageData.correct)) * storageData.correct
    )
  );
  if (!storageData.percentage) {
    storageData.percentage = 0;
  }
  localStorage.setItem(storageKey, JSON.stringify(storageData));
}

function resetStats() {
  localStorage.clear();
  dom.tableBody.innerHTML = " ";
  renderStatsPage(1, 0);
}

function sortStats(evt) {
  const column = evt.target;
  const sortedColumn = dom.tableHead.querySelector(".sorted");
  const idx = +column.dataset.column;
  const sortedRows = Array.from(dom.tableBody.rows);


  if (column && !column.classList.contains("sorted")) {
    if (sortedColumn) {
      sortedColumn.classList.remove("sorted");
    }

    column.classList.add("sorted");
    sortedRows.sort((rowA, rowB) =>
      rowA.cells[idx].innerHTML > rowB.cells[idx].innerHTML ? 1 : -1
    );
  } else if (column && column.classList.contains("sorted")) {
    column.classList.remove("sorted");
    sortedRows.reverse();
  }
  dom.tableBody.innerHTML = " ";
  dom.tableBody.append(...sortedRows);
}

export { showStats, renderStatsPage, setStats, resetStats, sortStats };
