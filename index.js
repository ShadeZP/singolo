const MENU = document.querySelector ('.navigation');
const FORM = document.querySelector('.form');
const CLOSE_BUTTON = document.querySelector('#btn-close');
const PORTFOLIO = document.querySelector ('.portfolio__table')
const PORTFOLIO_MENU = document.getElementById ('tags')

//HEADER

MENU.addEventListener ('click', (event) => {
    const elem = event.target.parentNode;
    if (elem.className === 'navigation__text'){
        MENU.querySelectorAll('li').forEach(el => {
            el.classList.remove ('navigation__text_active')
        });
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
        document.querySelector('.popup').classList.add('popup_hidden');}
});


//Portfolio

PORTFOLIO_MENU.addEventListener ('click', (tagActive));

function tagActive(event) {
    const tag = event.target;        
    if (tag.className === 'tags__item'){
        PORTFOLIO_MENU.querySelectorAll('li').forEach(el => {
            el.classList.remove ('tags__item_active')
        });
        tag.classList.add('tags__item_active')

        const portfolioPhotos = document.getElementById("portfolio__table")
            let shuffledPortfolio = document.createElement("div")
            shuffledPortfolio.className = "projects portfolio__table"
            shuffledPortfolio.id = "portfolio__table"
            
            const portfolioArr = Array.from(
                portfolioPhotos.querySelectorAll(".projects__link")
            )
    
            
            for (let i = portfolioArr.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1))
              const temp = portfolioArr[j]
              portfolioArr[j] = portfolioArr[i]
              portfolioArr[i] = temp
            };
    
            for (let item of portfolioArr) {
              shuffledPortfolio.append(item)
            };     
    
            portfolioPhotos.replaceWith(shuffledPortfolio)
    };
}

const photo = document.querySelectorAll(".projects__link");

for (let link of photo) {
    link.addEventListener("click", photoActive)
};

function photoActive(event) {
    const project = event.target.parentNode;
    event.preventDefault()    
    if (project.classList.contains ('projects__link')){
        photo.forEach(el => {
            el.classList.remove ('projects__link_active')
        });
        project.classList.add('projects__link_active')
    }
};

//Slider

let items = document.querySelectorAll('.slide');
let currentItem = 0;
let isEnabled = true;
let slider = document.querySelector(".slider")

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
    slider.classList.toggle("slider_colored")
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('slide_active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('slide_active');
        isEnabled = true;
    });
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

document.getElementById('left').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.getElementById('right').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

function changeBg () {
    document.querySelector(".slider").toggle("slider_colored")
}

//Экраны телефеонов

const SLIDER = document.querySelector(".slider")
const PHONE_VERTICAL = document.querySelector(".slider__phone-vertical")
const PHONE_HORIZONTAL = document.querySelector(".slider__phone-horizontal")
const DISPLAY_VERTICAL = document.querySelector(".displayVertical")
const DISPLAY_HORIZONTAL = document.querySelector(".displayHorizontal")

SLIDER.addEventListener ('click', event =>{
    let tag = event.target.parentNode; 
    console.log (tag)
    if (tag.classList.contains ('slider__phone-vertical')) {
        DISPLAY_VERTICAL.classList.toggle('active')
    };
    if (tag.classList.contains ('slider__phone-horizontal')) {
        DISPLAY_HORIZONTAL.classList.toggle('active')
    };

    }
)

// Menu mobile
const MENU_MOBILE = document.querySelector(".header__menu")
const menuModal = document.querySelector(".menu-modal")
const navMobile = document.querySelector(".nav-mobile")
const navDesktop = document.querySelector(".nav")
const headerWrapper = document.querySelector(".header__wrapper")
let isMenuOpen = false

MENU_MOBILE.addEventListener("click", menuClickHandler)
menuModal.addEventListener("click", closeMenuHandler)

function closeMenuHandler(event) {
  event.target.dataset.close && isMenuOpen ? closeMenu() : null
}

function menuClickHandler() {
  isMenuOpen ? closeMenu() : openMenu()
}

function openMenu() {
  toggleClasses()
  isMenuOpen = true
  navMobile.append(MENU)
}

function closeMenu() {
  toggleClasses()
  isMenuOpen = false
  menuModal.classList.add("menu-modal_hide")
  setTimeout(() => {
    menuModal.classList.remove("menu-modal_hide")
  }, 400)
  navDesktop.append(MENU)
}

function toggleClasses() {
    MENU_MOBILE.classList.toggle("header__menu_open")
    menuModal.classList.toggle("menu-modal_open")
    MENU.classList.toggle("navbar_mobile")
    headerWrapper.classList.toggle("header__wrapper_menu-open")
}

// wtf