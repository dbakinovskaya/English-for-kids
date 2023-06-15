const dom = {
    burger: document.querySelector('#burger__menu'),
};

function clickBurger(evt) {
    dom.burger.classList.toggle('active__menu');
}
dom.burger.addEventListener('click', clickBurger);