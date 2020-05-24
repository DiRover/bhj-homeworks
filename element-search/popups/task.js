'use strict'
let firstWindow = document.getElementById('modal_main');
let secondWindow = document.getElementById('modal_success');
firstWindow.classList.add('modal_active');
let closeButtons = document.getElementsByClassName('modal__close');
let amountCloseButtons = closeButtons.length;
let successShowBtn = document.getElementsByClassName('show-success');
let successBtn = document.getElementsByClassName('btn_success');

function changeWindow() {
    firstWindow.classList.remove('modal_active');
    secondWindow.classList.add('modal_active');
}
function closeWindow() {
    firstWindow.classList.remove('modal_active');
    secondWindow.classList.remove('modal_active');
}

successShowBtn[0].onclick = changeWindow;
successBtn[0].onclick = closeWindow;
for (let i = 0; i < amountCloseButtons; i++) {
    closeButtons[i].onclick = closeWindow;
}