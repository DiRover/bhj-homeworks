'use strict'
let menu = document.querySelector('.menu_main');
let subMenu = document.querySelectorAll('.menu_sub');
let arrMenu = Array.from(subMenu);

menu.addEventListener('click', fnOpen);

function fnOpen() {    
    let elem = document.querySelector('.menu_active');
    let target = event.target;
    if (target.nextElementSibling !== null) {
        event.preventDefault();
    }
    if (elem === null) { //активирует вложенное меню
        let menuOpen = target.nextElementSibling;
        if (arrMenu.includes(menuOpen)) {
            menuOpen.classList.add('menu_active');
        }
    } else if (target !== elem.previousElementSibling && target.nextElementSibling !== null) { //открытие второго меню при клике на другой menu__link, сразу после
        elem.classList.remove('menu_active');            //первого без задержки, я не знаю почему бывает target.nextElementSibling = null
        let targetSecond = target.nextElementSibling;
        targetSecond.classList.add('menu_active');
    } else {
        elem.classList.remove('menu_active'); //просто закрывает меню, если оно было открыто
    }    
}