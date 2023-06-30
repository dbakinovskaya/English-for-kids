import { dom } from "./index.js";

export function renderMainPage(list) {
  list.forEach((item) => {
    dom.menuList.innerHTML += buildMenuItem(item);
    dom.cardWrapper.innerHTML += buildCategoryCard(item);
  });
}

function buildMenuItem(item) {
  return `<li data-idx="${item.idx}">
        <a href="#">
            <img src="${item.icon}" alt="logo of category"/>
            ${item.category}
        </a>
    </li>`;
}

function buildCategoryCard(card) {
  return `<div data-idx="${card.idx}">
      <img src="${card.image}" alt="category image">
      <p>${card.category}</p>
    </div>`;
}