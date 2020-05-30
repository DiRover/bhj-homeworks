'use strict'
let  menu = document.querySelector('.dropdown__value');
let menuList = document.querySelector('.dropdown__list');

menu.addEventListener('click', getMenu);

function getMenu() {     
     let menuListActive = document.querySelector('.dropdown__list_active');
     menuListActive === null ? menuList.classList.add('dropdown__list_active') : menuList.classList.remove('dropdown__list_active');
}

menuList.addEventListener('click', getMenuValue);

function getMenuValue() {
    event.preventDefault();
    let target = event.target;
    menu.textContent = target.textContent;
    menuList.classList.remove('dropdown__list_active');
}