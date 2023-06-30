import { renderMenuList } from './category_page.js';

const cardData = [];

async function getData() {
  await fetch('cards.json')
    .then(response => response.json())
    .then(cards => cards.forEach((card) => {
      cardData.push(card)
    }))
    renderMenuList(cardData[0])
}

export { cardData, getData };
