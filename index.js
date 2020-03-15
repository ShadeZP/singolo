const MENU = document.querySelector ('.navigation');
const FORM = document.querySelector('.form');
const CLOSE_BUTTON = document.querySelector('#btn-close');

//HEADER

MENU.addEventListener ('click', (event) => {
    const elem = event.target.parentNode;
    if (elem.className === 'navigation__text'){
        MENU.querySelectorAll('li').forEach(el => {
            el.classList.remove ('navigation__text_active')
        });
        console.log (event.target);
        elem.classList.add('navigation__text_active')
    }
});

// Get a quote

FORM.addEventListener('submit',  event => {
    const subject = FORM.querySelector('#subject-text');
    const message = FORM.querySelector('.form__input_textarea');
    event.preventDefault();
    if (FORM.checkValidity()) {
        document.querySelector('#popup-subject').innerText = (subject.value) ? `Тема: ${subject.value}` : `Без темы`;
        document.querySelector('#popup-message').innerText = (message.value) ? `Описание: ${message.value}` : 'Без описания';
        document.querySelector('.popup').classList.remove('popup_hidden');
    };
    FORM.reset();
});

CLOSE_BUTTON.addEventListener ('click',  (event) => {
    if (event.target.id === 'btn-close'){
        document.querySelector('#popup_msg').classList.add('popup_hidden');}
});