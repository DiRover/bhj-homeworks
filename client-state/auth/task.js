'use strict'
const formDiv = document.getElementById('signin'); //получаем эле-т с формой
let form = document.getElementById('signin__form'); // получаем форму
let user = document.getElementById('user_id'); //эл-т для айди юзера
let welcome = document.getElementById('welcome'); //эл-т приветствия
let field = document.querySelectorAll('.control'); //поля формы
if (localStorage.user !== undefined) {
    user.textContent = localStorage.user;
    welcome.classList.add('welcome_active');
} else {
    formDiv.classList.add('signin_active'); //включаем форму
}


form.addEventListener('submit', getForm); //отправляем форму

function getForm() {
    event.preventDefault();
    let formData = new FormData(form); //собираем данные формы
    let xhr = new XMLHttpRequest(); //отправляем запрос
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    xhr.onloadend = function() { //обрабатываем ответ
        let data = JSON.parse(this.responseText); 
        if (data.success) {
            let userId = data.user_id; //получаем айди юзера
            user.textContent = userId; //вставляем айди юзера в приветствие
            localStorage.setItem('user', `${userId}`); //сохраняем айди юзера в локалсторедж
            formDiv.classList.remove('signin_active'); //отключаем эл-т с формой
            welcome.classList.add('welcome_active'); //приветствуем юзера
        } else {
            alert('Неверный логин/пароль'); //вариант если пароль неверен
            for (let i = 0; i < field.length; i++) {
                field[i].value = ""; //очищаем форму
            }
        }
    }
}