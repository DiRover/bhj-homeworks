'use strict'
let rotator = document.getElementsByClassName('rotator__case');
let arrRotator = Array.from(rotator);
let span = document.querySelector('span').children;//это не обязательно, для показа возможности

for (let i = 0; i < arrRotator.length; i++) { //цикл нужен для нового значения интервала speed
    let speed = span[i].dataset.speed; //получам значение интервала
    let colorValue = span[i].dataset.color; //получаем значение цвета текста 
    span[i].setAttribute('style', `color: ${colorValue}`); //создаём атрибут с цветом текста
    setInterval(() => { //сменяем элементы
        let currentRotator = document.querySelector('.rotator__case_active');
        let index = arrRotator.indexOf(currentRotator);
        currentRotator.classList.remove('rotator__case_active');   
        if (index === (arrRotator.length - 1)) {
            arrRotator[0].classList.add('rotator__case_active');
        } else {
            currentRotator.nextElementSibling.classList.add('rotator__case_active');
        }    
    }, speed);
}