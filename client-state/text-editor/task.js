'use strict'
const textBox = document.getElementById('editor'); //получаем эл-т с текстом
//проверяем был ли текст уже записан
localStorage.text === undefined ? textBox.value = "" : textBox.value = localStorage.text;
const button = document.getElementById('button'); //получаем кнопку для очистки содержимого эл-та с текстом

textBox.addEventListener('blur', saveText); //сохранение при потери фокуса
textBox.addEventListener('keydown', () => { //сохранение при перезагрузки страницы с F5
    let target = event.key;
    if (target === 'F5') {
        saveText();
    }
});

function saveText() { 
    localStorage.setItem('text', `${textBox.value}`); //записываем в памть текст
}

button.addEventListener('click', deleteText);

function deleteText() {
    localStorage.clear(); //очищаем память
    if (textBox.value !== undefined) { //очищаем само текстовое поле
        textBox.value = "";
    }
}