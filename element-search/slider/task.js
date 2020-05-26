'use strict'
let arrows = document.querySelector('.slider__arrows');
let left = document.querySelector('.slider__arrow_prev');
let right = document.querySelector('.slider__arrow_next');
let slidersAll = document.getElementsByClassName('slider__item');
let arrSliders = Array.from(slidersAll);
let dotsAmount = document.getElementsByClassName('slider__dot');
let arrDotts = Array.from(dotsAmount);
let firstDot = document.querySelector('.slider__dot');
firstDot.classList.add('slider__dot_active');


arrows.addEventListener('click', getSlider);

function getSlider() {
    let curretnSlider = document.querySelector('.slider__item_active'); //текущий слайд
    let indexSlider = arrSliders.indexOf(curretnSlider);
    let currentDot = document.querySelector('.slider__dot_active'); //текущая точка
    let target = event.target;    
    if (target === left) {
        currentDot.classList.remove('slider__dot_active'); //сносим текщий слайд, сразу не написать, тогда если кликнуть не настрелку всё снесётся 
        curretnSlider.classList.remove('slider__item_active'); //сносим текущу точку
        if (indexSlider === 0) {
            arrSliders[arrSliders.length - 1].classList.add('slider__item_active'); //заходим с конца слайдов, если закончились
            arrDotts[arrSliders.length - 1].classList.add('slider__dot_active');
        } else {
            curretnSlider.previousElementSibling.classList.add('slider__item_active'); //просто промотка назад
            currentDot.previousElementSibling.classList.add('slider__dot_active');
        }
    } else if (target === right) { 
        currentDot.classList.remove('slider__dot_active'); //сносим текщий слайд
        curretnSlider.classList.remove('slider__item_active'); //сносим текущу точку 
        if (indexSlider === (arrSliders.length - 1)) {
            arrSliders[0].classList.add('slider__item_active'); //заходим с начла слайдов, если закончились
            arrDotts[0].classList.add('slider__dot_active');
        } else {
            curretnSlider.nextElementSibling.classList.add('slider__item_active'); //просто промотка вперёд
            currentDot.nextElementSibling.classList.add('slider__dot_active');
        }        
    }
}
//работа точек
for (let i = 0; i < arrDotts.length; i++) {
    arrDotts[i].onclick = function() { //не понимаю как он сам опраделяет индекс точки после клика и не проводит итераций 
        let curretnSlider = document.querySelector('.slider__item_active');        
        let currentDot = document.querySelector('.slider__dot_active');
        let target = event.target; 
        currentDot.classList.remove('slider__dot_active');
        target.classList.add('slider__dot_active');
        curretnSlider.classList.remove('slider__item_active');
        arrSliders[i].classList.add('slider__item_active');
    }        
}