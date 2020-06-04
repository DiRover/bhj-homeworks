'use strict'
let checkAll = document.querySelectorAll('.interest__check');

for (let i = 0; i < checkAll.length; i++) {
    checkAll[i].onclick = function() {
        let target = event.target; //получаем цель
        let parent = target.closest('.interest'); //получаем родителя цели
        let child = parent.getElementsByTagName('input'); //получаем всех детей родителя
        for (let j = 0; j < child.length; j++) { //включаем или выключаем всех детей
            if (child[j].checked === true && child[j] !== target) { //таргет проверяется, чтобы не отключился 
                child[j].checked = false;
            } else if (child[j].checked === false && child[j] !== target) {
                child[j].checked = true;
            }            
        }
    }
}