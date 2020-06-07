'use strict'
let controls = document.querySelectorAll('.product__quantity-controls'); //кнопки + и -
let quantity = document.querySelectorAll('.product__quantity-value');
let buttonAdd = document.querySelectorAll('.product__add'); //кнопка добавить
let basket = document.querySelector('.cart__products'); //карзина
let arr = []; //массив для покупок в карзине

for (let i = 0; i < controls.length; i++) { //единый цикл на все операции
    controls[i].onclick = () => { //выставляем кол-во товара
        let targetControl = event.target;
        let quantityValue = quantity[i].textContent; //получаем знчения кол-ва
        if (targetControl.classList.contains('product__quantity-control_dec')) { //меньше товара
            quantityValue < '2'  ? quantityValue = '1' : quantityValue--; //товара должно быть не меньше 1
        } else if (targetControl.classList.contains('product__quantity-control_inc')) { //больше товара
            quantityValue++;
        }
        quantity[i].textContent = quantityValue; //вставляем значения товара
    }
    buttonAdd[i].onclick = () => {
        let targetButton = event.target;
        let parent = targetButton.closest('.product');
        let idProduct = parent.dataset.id; //получаем id добавляемого товара
        let img = parent.querySelector('.product__image').src; //картинку товара
        let productQuantity = Number.parseInt(parent.querySelector('.product__quantity-value').textContent); //парсим строку в число, кол-во твовара
        let productInBasket = basket.querySelectorAll('.cart__product'); //получаем товары в карзине

        if (productInBasket.length === 0) { //проверка на наличие товаров в карзине
            //добавление первого товара
            basket.innerHTML += ` 
            <div class="cart__product" data-id=${idProduct}>
              <img class="cart__product-image" src=${img}>
              <div class="cart__product-count">${productQuantity}</div>
            </div>
        `
        arr.push(idProduct); //рушаем товар в массив товаров в карзине
        } else if (!arr.includes(idProduct)) { //проверяем на есть именно такой товар в карзине
            //добавление нового товара в карзину
            basket.innerHTML += `
            <div class="cart__product" data-id=${idProduct}>
              <img class="cart__product-image" src=${img}>
              <div class="cart__product-count">${productQuantity}</div>
            </div>
        `
        arr.push(idProduct); //рушаем товар в массив товаров в карзине
        } else { //если такой товар уже есть, меняем его кол-во
            let index = arr.indexOf(idProduct); //находим индекс товара в массиве товаров
            let productInBasketQuantity = productInBasket[index].querySelector('.cart__product-count'); //по индексу определяем место в карзине
            let quantityValue = Number.parseInt(productInBasketQuantity.textContent); //сколько товара уже есть в карзине
            productInBasketQuantity.textContent = quantityValue + productQuantity; //добавляем новое кол-во к существующему
        }
    }
}