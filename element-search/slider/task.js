'use strict'
let right = document.querySelector('.slider__arrow_next');
let left = document.querySelector('.slider__arrow_prev');
let slidersAll = document.getElementsByClassName('slider__item');
let arrSliders = Array.from(slidersAll);
let slidersAmount = arrSliders.length;
let dots = document.querySelector('.slider__dots');
let dotsAll = document.getElementsByClassName('slider__dot')
let arrDotts = Array.from(dotsAll);



right.addEventListener('click', getRigth);
left.addEventListener('click', getLeft);
dots.addEventListener('click', getSliderByDot);

function getSliderByDot() {
    let target = event.target;
    if (target === dots) { //если скликнул мимо точки, иначе может выдать ошибку
        return false
    }    
    let curretnSlider = document.querySelector('.slider__item_active');
    curretnSlider.classList.remove('slider__item_active');
    slidersAll[arrDotts.indexOf(target)].classList.add('slider__item_active');

}

function getRigth() {
    let curretnSlider = document.querySelector('.slider__item_active');
    let nextSlider = curretnSlider.nextElementSibling;
    if (nextSlider === null) {
        curretnSlider.classList.remove('slider__item_active');
        slidersAll[0].classList.add('slider__item_active');
    } else {
        curretnSlider.classList.remove('slider__item_active');
        nextSlider.classList.add('slider__item_active');
    }    
}

function getLeft() {
    let curretnSlider = document.querySelector('.slider__item_active');
    let previoustSlider = curretnSlider.previousElementSibling;
    if (previoustSlider === null) {
        curretnSlider.classList.remove('slider__item_active');
        slidersAll[slidersAmount - 1].classList.add('slider__item_active');
    } else {
        curretnSlider.classList.remove('slider__item_active');
        previoustSlider.classList.add('slider__item_active');
    }    
}