'use strict'
let xhr = new XMLHttpRequest(); //запрос
let data; //переменная для записи ответа сервера
let dataPercent; //переменная для хранения общей статистики ответов
const poll = document.getElementById('poll__title');
const answersBox = document.getElementById('poll__answers');
const rating = document.getElementById('answers_rating');
let pollTitle; //переменная для хранения заголовка вопроса
let answers; //для хранения массива ответов, так удобней обрабатывать
let pollId; //для id вопроса
 
//запускае запрос
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onloadend = function() {
    data = JSON.parse(this.responseText);
    pollId = data.id; //записываем id вопроса
    pollTitle = data.data.title; //записываем заголовок вопроса
    answers = data.data.answers; //записываем массив ответов
    poll.innerHTML = pollTitle; //вставляем заголовок
    for (let i = 0; i < answers.length; i++) { //вставляем кнопки с ответами
        answersBox.innerHTML += `
        <button class="poll__answer">
            ${answers[i]}
        </button>
        `
    }
    poll.setAttribute('data-id', `${pollId}`) //прописываем атрибут с id для дальнейшей работы
}
 
answersBox.addEventListener('click', getAnswer); //обрабатываем кнопки через общего родителя
 
function getAnswer() {
    let target = event.target;
    let buttons = document.querySelectorAll('.poll__answer'); //получаем сами кнопки
    let answerIndex; //для хранения индекса ответа
    for (let i = 0; i < buttons.length; i++) {
        if (target === buttons[i]) { //проверяем, является ли цель клика кнопкой
            answerIndex = i; //записываем индекс ответа
            alert('Спасибо, ваш голос засчитан!');
        }
    }
    let xhr = new XMLHttpRequest; //запускаем запрос на получение данных о статистики ответов
    pollId = poll.dataset.id; //получам id вопроса
    xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.send( `vote=${pollId}&answer=${answerIndex}`); //передаём данные об прошедшем опросе
    xhr.onloadend = function() {
        dataPercent = JSON.parse(this.responseText).stat;
        for (let i = 0; i < dataPercent.length; i++) {
            //вставляем разметку с полученными данными
            answersBox.insertAdjacentHTML('afterEnd', `<p>${dataPercent[i].answer}: ${dataPercent[i].votes}</p>`);
        }
        console.log(dataPercent);
        } 
}