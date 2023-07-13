import { renderMainPage, renderMenuList } from "./category_page.js";
import { renderStatsPage } from "./stats.js";

const cardData = [];

async function getData() {
  await fetch("cards.json")
    .then((response) => response.json())
    .then((cards) =>
      cards.forEach((card) => {
        cardData.push(card);
      })
    );
  renderMainPage(cardData[0]);
  renderMenuList(cardData[0]);
  renderStatsPage(1,0);
}

export { cardData, getData };
