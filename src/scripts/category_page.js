import {dom} from './index.js';

// export function renderMainPage() {

// }

export function renderMenuList(list) {
    list.forEach((item) => {
        dom.menuList.innerHTML += buildMenuItem(item)
    });
}

function buildMenuItem(item) {
  return `<li>
        <a href="#">
            <img src="${item.icon}" alt="logo of category"/>
            ${item.category}
        </a>
    </li>`;
}
