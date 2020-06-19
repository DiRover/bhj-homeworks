'use strict'
const progress = document.getElementById('progress');//получаем полосу прогресса
let form = document.getElementById('form'); //получаем элемент формы
const button = document.getElementById('send'); //получаем кнопку
let formData = new FormData(form);//создаём форму для отправки
let xhr = new XMLHttpRequest();//создаём запрос
button.addEventListener('click', sendForm); //обработчик на кнопку
function sendForm() {//отправляем запрос
    event.preventDefault();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData); //отправляем форму
    let file = form.getElementsByTagName('input')[0];
    let fileSize = file.files[0].size; //перевожу байты в биты
    xhr.addEventListener('progress', function(event) {
        let kyloBytesLoaded = event.loaded;
        let percents = kyloBytesLoaded / fileSize;
        progress.value = percents ;
    });
}