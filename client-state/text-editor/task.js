'use strict'
const textBox = document.getElementById('editor'); //получаем эл-т с текстом
//проверяем был ли текст уже записан
textBox.value = !localStorage.text ? "" : localStorage.text;
const button = document.getElementById('button'); //получаем кнопку для очистки содержимого эл-та с текстом

textBox.addEventListener('blur', saveText); //сохранение при потери фокуса

window.addEventListener('unload', saveText); //сохраняем текст при перезагрузки страницы

function saveText() { 
    localStorage.setItem('text', textBox.value); //записываем в память текст
}

button.addEventListener('click', deleteText); //удаляем текст кнопкой

function deleteText() {
    localStorage.removeItem('text'); //удаляем эл-т из памяти
    textBox.value = "";
}