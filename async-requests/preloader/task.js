'use strict'
let currency = document.getElementById('items'); //элемент для вывода валюты
let loaderGif = document.getElementById('loader'); //картинка для загрузки
let xhr = new XMLHttpRequest(); //запрос
let data; //переменная для записи ответа сервера
let arr = []; //сюда запишем все объекты с инфой о валюте
//запускае запрос
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
 
//получаем ответ сервера
xhr.onloadend = function() {
    loaderGif.classList.remove('loader_active'); //отключаем картинку загрузки
    data = JSON.parse(this.responseText); //преобразуем JSON в объет js
    let obj = data.response.Valute; //получаем объект с валютой
    for (let i in obj) { //создаём массив с объектами валюты для удобной обработки
        let x = obj[i];
        arr.push(x)
    }
    for (let i = 0; i < arr.length; i++) { //обрабатываем массив с объектами валюты
        let currencyCode; //код валюты
        let currencyValue; //значение валюты
        let currencyName; //имя валюты
        for (let j in arr[i]) {
            //ищем нужные значения для вывода
            if (j === "CharCode") {
                currencyCode = arr[i][j];
            } else if (j === "Value") {
                currencyValue = arr[i][j];
            } else if (j === "Name") {
                currencyName = arr[i][j];
            }
            
        } //выводим на экран
        currency.innerHTML += `
            <div class="item">
            <div class="item__code">
                ${currencyCode}
            </div>
            <div class="item__value">
            ${currencyValue}
            </div>
            <div class="item__currency">
            ${currencyName}
            </div>
        </div>
            `
    }
}