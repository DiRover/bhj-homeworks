'use strict'
const output = document.getElementById('timer');  
let sec = output.textContent;
const timer = function(){       
    if (sec === 0) {
        location.assign('https://www.mozilla.org/ru/firefox/download/thanks/');
        return alert("Вы победили в конкурсе");
    } else {
        sec--;
        output.textContent = `00:00:${sec >= 10 ? sec : "0" + sec}`;        
    }    
}
setInterval(timer, 1000);