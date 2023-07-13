import { dom } from "./index.js";
import { highlightActiveCategory } from "./burger_menu.js";

function renderMainPage(list) {
  dom.cardWrapper.innerHTML = "";
  dom.statsWrapper.classList.remove("active");
  dom.statsBtnsWrapper.classList.remove("active");
  dom.mode.classList.remove("hide");
  list.forEach((item) => {
    dom.cardWrapper.innerHTML += buildCategoryCard(item);
  });
  highlightActiveCategory('0');
}

function renderMenuList(list) {
  list.forEach((item) => {
    dom.menuList.innerHTML += buildMenuItem(item);
  })
}

function buildMenuItem(item) {
  return `<li data-idx="${item.idx}">
      <img src="${item.icon}" alt="logo of category"/>
      ${item.category}
  </li>`;
}

function buildCategoryCard(card) {
  return `<div class="category" data-idx="${card.idx}">
      <img src="${card.image}" alt="category image">
      <p>${card.category}</p>
    </div>`;
}

export { renderMainPage, renderMenuList };