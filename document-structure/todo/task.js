'use strict'
let task = document.getElementById('task__input');
let button = document.getElementById('tasks__add');
let taskList = document.querySelector('.tasks__list');


button.addEventListener('click', getTask); //добавляем задачу

function getTask() {
    event.preventDefault();
    let taskTxt = task.value; //получаем вводимое значение
    if (taskTxt.length > 0) { //проверка на то, чтобы текст задачу существовал
        taskList.innerHTML += ` 
        <div class="task">
          <div class="task__title">
            ${taskTxt}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `
    }  
    task.value = ""; //обнуляем поле ввода задачи
}

taskList.addEventListener('click', closeTask); //удаляем задачу

function closeTask() {
    let target = event.target;
    let currentTask = target.closest('.task');
    if (target.classList.contains('task__remove')) { //проверяем что попали именно на Х
        currentTask.remove();
    }    
}