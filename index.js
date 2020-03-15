const MENU = document.querySelector ('.navigation');

MENU.addEventListener ('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => {
        el.classList.remove ('navigation__text_active')
    });
    const elem = event.target.parentNode;
    elem.classList.add('navigation__text_active')
});