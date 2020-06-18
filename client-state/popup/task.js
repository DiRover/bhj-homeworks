'use strict'
const modal = document.getElementById('subscribe-modal'); //получаем эл-т с модальным окном
if (document.cookie !== 'close=done') { //проверяем есть ли кука с инфой о закрытии окна ранее
    modal.classList.add('modal_active'); //если нет, то включаем окно
} 
modal.addEventListener('click', closeModal); //обработчик на закрытие окна

function closeModal() {
    let target = event.target; //получаем место клика
    let closeX = document.querySelector('.modal__close'); //получаем крестик окна
    if (target === closeX) { //проверяем кликнули ли на крестик
        modal.classList.remove('modal_active'); //закрываем окно
        document.cookie = 'close=done; max-age=10'; //записываем в куки инфу об этом действии и продолжительности жизни куки 10 сек.
    }
}