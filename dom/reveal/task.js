'use strict'
const reveal = document.querySelector('.reveal');//получаем нужный эл-т

window.addEventListener('scroll', fn);

function fn() {
    let top = reveal.getBoundingClientRect().top; //получаем верх эл-та
    let bottom = reveal.getBoundingClientRect().bottom; //получаем низ эл-та
    let elementHeight = bottom - top; //высота эл-та
    let windowHeight = window.innerHeight; //высота области просмотра
    if ((windowHeight/2 + elementHeight/2) >= bottom && bottom >= (windowHeight/2 - elementHeight/2)) { //диапазон, в котором виден эл-т
        reveal.classList.add('reveal_active');
    } else {
        reveal.classList.remove('reveal_active');//удаляем когда не виден
    }
}