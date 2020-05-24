'use strict'
let menu = document.querySelector('.menu_main');
let subMenu = document.querySelectorAll('.menu_sub');
let arrMenu = Array.from(subMenu);

menu.addEventListener('click', fnOpen);

function fnOpen() {
    event.preventDefault();
    let target = event.target;
    let menuOpen = target.nextElementSibling;      
    if (arrMenu.includes(menuOpen)) {
        menuOpen.classList.add('menu_active');        
    } 
}
let subMenuActive = document.querySelector('body');
subMenuActive.addEventListener('click', fnClose);

function fnClose() {  
    let elem = document.querySelector('.menu_active');
    let elems = document.querySelectorAll('.menu_active')    
    let target = event.target;    
    //закрытие меню
    if (elem !== target.nextElementSibling && elem !== null) {
        elem.classList.remove('menu_active');        
    }
    //одно меню на странице
    if (elems.length > 1 && elem === target.nextElementSibling) {
        for (let i = 1; i < elems.length; i++) {
            elems[i].classList.remove('menu_active');
        }        
    }
}