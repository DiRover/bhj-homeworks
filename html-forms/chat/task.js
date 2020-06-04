'use strict'
const widget = document.querySelector('.chat-widget');
const message = document.getElementById('chat-widget__input');
let messageBox = document.getElementById('chat-widget__messages');
let messageContainer = document.querySelector('.chat-widget__messages-container');
let today = new Date;
let hh = today.getHours();
let min = today.getMinutes();        
let sec = 5;

const botAnswers = ['Hello', 'How you doing?', 'WTF?', 'What do you want from me?', 'Get out of here!', 'I wanna sleep..', 'You bored'];
const botQues = ['How you doing?', 'WTF?', 'What do you want from me?', 'What are you doing here?'];
//открываем чат
widget.addEventListener('click', getWidget);
messageContainer.scrollTop = Infinity;
function getWidget() {  
    let target = event.target;
    if (target !== message) {
        widget.classList.toggle('chat-widget_active');
    }
}

message.addEventListener('keypress', sendMessage);

function sendMessage() {
    let target = event.key; //получаем значение клавиши
    if (target === 'Enter' && message.value.length > 0) {     //проверяем клавишу и того кто вводит текст  
        let txt = message.value;  //получаем вводимый текс
        //добавляем новые сообщения в чат с указанием времени
        messageBox.innerHTML += ` 
            <div class="message message_client">
                <div class="message__time">${hh}:${min < 10 ? '0' + min : min}</div>
                <div class="message__text">
                ${txt}
                </div>
            </div>
        `;
        let txtBot = botAnswers[Math.floor(Math.random() * botAnswers.length)];
            messageBox.innerHTML += `
            <div class="message">
                <div class="message__time">${hh}:${min < 10 ? '0' + min : min}</div>
                <div class="message__text">
                ${txtBot}
                </div>
            </div>
        `;
        message.value = '';        
    }
    messageContainer.scrollBy(0, 9999999); //прокручиваем страницу вниз
}
//сообщение от бота каждые 5 сек
function timer() {
    let widgetActive = document.querySelector('.chat-widget_active');
    if (sec !== 0 && widgetActive !== null) {
        sec--;
    } else if (widgetActive !== 0) {
        sec = 5;
        let txtBot = botQues[Math.floor(Math.random() * botQues.length)];
            messageBox.innerHTML += `
            <div class="message">
                <div class="message__time">${hh}:${min}</div>
                <div class="message__text">
                ${txtBot}
                </div>
            </div>
        `;
    }
    messageContainer.scrollBy(0, 9999999); //прокручиваем страницу вниз
}
setInterval(timer, 1000);