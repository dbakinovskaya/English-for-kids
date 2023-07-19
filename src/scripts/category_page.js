import { dom } from "./dom.js";
import { highlightActiveCategory } from "./burger_menu.js";

const {
  cardWrapper,
  answerWrapper,
  repeatBtn,
  statsWrapper,
  statsBtnsWrapper,
  mode,
  menuList,
} = dom;

function renderMainPage(list) {
  cardWrapper.innerHTML = "";
  answerWrapper.innerHTML = "";
  repeatBtn.classList.add("hide");
  statsWrapper.classList.remove("active");
  statsBtnsWrapper.classList.remove("active");
  mode.classList.remove("hide");
  list.forEach((item) => {
    cardWrapper.innerHTML += buildCategoryCard(item);
  });
  highlightActiveCategory("0");
}

function renderMenuList(list) {
  list.forEach((item) => {
    menuList.innerHTML += buildMenuItem(item);
  });
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
