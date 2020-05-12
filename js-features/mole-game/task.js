'use strict'
const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');
let win = 0;
let lost = 0;
function getHole(index) {
    return document.getElementById(`hole${index}`)
}
function zeroScore() {
    deadMole.textContent = 0;
    lostMole.textContent = 0;
    win = 0;
    lost = 0;
}
for (let index = 1; index < 10; index++) {
    getHole(index).onclick = function() {
        if (getHole(index).classList.contains('hole_has-mole')) {
            win++;
            deadMole.textContent = win;
        } else {
            lost++;
            lostMole.textContent = lost;
        }
        if (win === 10) {
            alert('You win!');
            zeroScore();
        } else if (lost === 5) {
            alert('You lost!');
            zeroScore();
        }
    }
}