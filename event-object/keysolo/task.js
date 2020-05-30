class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }
//Домашнее задание начиналось тут
  registerEvents() {        
    let word = document.getElementsByClassName('symbol'); //Получаем слово
    let timer = document.querySelector('.timer'); //Поучаем таймер
    let sec = timer.textContent = word.length; //Значание таймера
    
    //Запускаем соло на клавиатура
    document.addEventListener('keypress', () => {
      let currentSymbol = document.querySelector('.symbol_current'); //получаем элемент с текущим символом
      let symbol = currentSymbol.textContent; //получаем сам текщий символ
      let arrWord = Array.from(word); //массив элементов с символами
      //проверка вводимого символа с текущим символом в слове
      if (event.key === symbol) {
        this.success();
      } else {
        this.fail();
      }
      //переход к следующему символу в слове
      let index = arrWord.indexOf(currentSymbol);      
      currentSymbol.classList.remove('symbol_current');
      if (index < arrWord.length && arrWord[index + 1] !== undefined) { //arrWord[index + 1] - нужен чтобы
        arrWord[index + 1].classList.add('symbol_current');// не выйти за пределы кол-ва символов в коде
      }
    }); 
    //таймер обратного отсчёта
    setInterval(() => {      
      timer.textContent = sec; //вывод значения таймера, кол-во секунд равно кол-ву символов в коде
      if (sec === 0) {
        this.fail(); //проигрыш, если время вышло
        sec = word.length; //подставляем в таймер новое значение после проигрыша    
      } else {
        sec--;
      }
    }, 1000);   // -1 сек
  }
  //конец домашнего задания

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

