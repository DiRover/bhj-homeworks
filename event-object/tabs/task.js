'use strict'
let navigation = document.querySelector('.tab__navigation');//получаем меню
let tabs = document.getElementsByClassName('tab');//получаем эл-ты меню
let arrTabs = Array.from(tabs); //получаем массив эл-ов
let tabContent = document.getElementsByClassName('tab__content');//получаем эл-ты с контентом
let arrContent = Array.from(tabContent);

navigation.addEventListener('click', getTab);

function getTab() {
    let target = event.target;
    let currentContent = document.querySelector('.tab__content_active');
    let currentTab = document.querySelector('.tab_active');
    let index = arrTabs.indexOf(target);
    if (target !== currentTab) {
        currentTab.classList.remove('tab_active');
        target.classList.add('tab_active');
        currentContent.classList.remove('tab__content_active');
        arrContent[index].classList.add('tab__content_active');
    }
}