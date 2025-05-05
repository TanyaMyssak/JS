/* Завдання 1

Створіть функцію handleNum яка буде приймати 3 параметри.
1) число
2) Колбек функцію яку треба викликати якщо передане число парне
3) Колбек функцію яку треба викликати якщо передане число непарне

Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. 
Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, 
a handleOdd буде виводити текст “number is odd”
Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше */

function handleNum(number, evenCallBack, oddCallBack) {
	if (number % 2 === 0) {
		evenCallBack(number);
	} else {
		oddCallBack(number);
	}
}
function handleEven(number) {
	console.log(`${number}: Number is even`);
}
function handleOdd(number) {
	console.log(`${number}: Number is odd`);
}

handleNum(1021, handleEven, handleOdd);
handleNum(1500, handleEven, handleOdd);
