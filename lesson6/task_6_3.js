/* Завдання 3

Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 
Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”

Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”

У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted” */


const checkOrder = function (quantityAvailable, quantityOrdered) {
    if (quantityOrdered <=0) {
        return "Your cart is empty";
    } else if (quantityOrdered > quantityAvailable) {
        return "Ordered quantity is too big, requested amount is not available on our stock.";
    } else {
        return "Your order is accepted";
    }
};
const quantityAvailable = 1000;
const quantityOrdered = -6;
const result = checkOrder(quantityAvailable, quantityOrdered);

console.log(result); 
