'use strict'
let body = document.getElementsByTagName('body');

body[0].addEventListener('click', fn);
function fn() {
    event.preventDefault();
    let target = event.target;
    let tipActive = document.querySelector('.tooltip_active'); //получаем активную подсказку
    let tips = document.querySelectorAll('.tooltip'); 
    if (tipActive !== null) { //проверяем существование активной подсказки
        tipActive.remove(); //если есть, удаляем
    }
 if (target.title.length){ //активируем подсказку, проверку нужна, т.к. обработчи стоит на body и target бывает без title
    target.insertAdjacentHTML('afterEnd', `<div class = 'tooltip tooltip_active'>${target.title}</div>`);
    let tip = document.querySelector('.tooltip');
    let top = target.getBoundingClientRect().top;
    let bottom = target.getBoundingClientRect().bottom;
    let left = target.getBoundingClientRect().left;
    let elemHaigth = bottom - top;
    tip.setAttribute('style', `left: ${left}px; top: ${top + elemHaigth}px`); //вставляем подсказку под координатам
    } 
}