'use strict'
const counter = document.getElementById('clicker__counter');
let clickAmount = counter.textContent;
const cookie = document.getElementById('cookie');
const speed = document.getElementById('speed_clicker');
let firstClick;
cookie.onclick = function() {
    counter.textContent = clickAmount++;    
    if (clickAmount % 2 !== 0) {
        cookie.width *= 1.1;
        cookie.height *= 1.1;
        firstClick = (new Date()).getTime();
    } else {
        cookie.width *= 0.9;
        cookie.height *= 0.9;        
        speed.textContent = (1000 / ((new Date()).getTime() - firstClick)).toFixed(2);//подсчёт кликов в секунду
    }    
};