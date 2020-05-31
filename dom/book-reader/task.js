'use strict'
const book = document.getElementById('book');
const fontSize = document.getElementsByClassName('font-size');
const arrFont = Array.from(fontSize);

for (let i = 0; i < arrFont.length; i++) {
    arrFont[i].onclick = function () {
        event.preventDefault();//предотвращаем действие по умолчанию, переход по ссылке
        let currentFont = document.querySelector('.font-size_active');
        let target = event.target;
        if (currentFont.matches('.font-size_small')) { //проверяем расзмер текущего текста и сносим его для установки нового
            book.classList.remove('book_fs-small')
        } else if (currentFont.matches('.font-size_big')) {
            book.classList.remove('font-size_big');
        }
        if (currentFont !== target) { //переключаем текст
            currentFont.classList.remove('font-size_active');
            target.classList.add('font-size_active');
        }
        if (target.matches('.font-size_small')) {//проверяем размер текста у цели и устанавливаем нужный
            book.classList.add('book_fs-small')
        } else if (target.matches('.font-size_big')) {
            book.classList.add('font-size_big');
        }
    }
}