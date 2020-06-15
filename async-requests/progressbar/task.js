'use strict'
const progress = document.getElementById('progress');//получаем полосу прогресса
let form = document.getElementById('form'); //получаем элемент формы
const button = document.getElementById('send'); //получаем кнопку
let formData = new FormData(form);//создаём форму для отправки
let xhr = new XMLHttpRequest();//создаём запрос
 
button.addEventListener('click', sendForm); //обработчик на кнопку
 
function sendForm() {//отправляем запрос
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData); //отправляем форму
}
 
xhr.onreadystatechange = loadStatus;
 
function loadStatus() { //получаем состояние, сравниеваем и выставляем полосу прогрессбара
    if (this.readyState === xhr.OPENED) {
        progress.value = 0.25;
    } else if (this.readyState === xhr.HEADERS_RECEIVED) {
        progress.value = 0.5;
    } else if (this.readyState === xhr.LOADING) {
        progress.value = 0.75;
    } else if (this.readyState === xhr.DONE && this.status == 200) {
        progress.value = 1.0;        
    }
}