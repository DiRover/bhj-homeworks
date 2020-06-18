'use strict'
const formDiv = document.getElementById('signin');
let form = document.getElementById('signin__form');
let user = document.getElementById('user_id');
let welcome = document.getElementById('welcome');
let field = document.querySelectorAll('.control');
formDiv.classList.add('signin_active');

form.addEventListener('submit', getForm);

function getForm() {
    event.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    xhr.onloadend = function() {
        let data = JSON.parse(this.responseText);
        console.log(data);
        if (data.success) {
            let userId = data.user_id;
            user.textContent = userId;
            localStorage.setItem('user', `${userId}`);
            formDiv.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
        } else {
            alert('Неверный логин/пароль');
            for (let i = 0; i < field.length; i++) {
                field[i].value = "";
            }
        }
    }
}