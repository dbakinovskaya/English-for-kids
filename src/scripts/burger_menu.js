const dom = {
    burger: document.querySelector('#burger__menu'),
    menu: document.querySelector('#menu__wrapper'),
    mode: document.querySelector('.mode')
};

function showBurgerMenu() {
    dom.burger.classList.toggle('active__menu');
    dom.menu.classList.toggle('active__menu');
}

function clickModeButton() {
    dom.mode.classList.toggle('play');
}

function closeBurgerMenu(evt) {
    const elem = evt.target;
    if (!elem.closest('nav')) {
        dom.burger.classList.remove('active__menu');
        dom.menu.classList.remove('active__menu');
    }
}

dom.menu.addEventListener('click', closeBurgerMenu);

dom.burger.addEventListener('click', showBurgerMenu);

dom.mode.addEventListener('click', clickModeButton);