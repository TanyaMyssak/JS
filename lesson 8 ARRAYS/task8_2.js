/* Завдання 2: Копіювання з мутацією

Вам потрібно створити програму, яка мутує значення кожного елемента в масиві за допомогою методу map.

Ось кроки, які вам потрібно виконати:

Створіть початковий масив, наприклад, [1, 2, 3, 4, 5].
Створіть новий масив, де кожне значення це елемент вихідного масиву помножений на значення індексу відповідного елемента початкового масиву.
Виведіть новий масив на консоль. */

const initialArray = [1, 2, 3, 4, 5, 6];
console.log('Initial array param values:             ', initialArray);

/*Variant 2*/
const arrayIndexes = initialArray.map(function (value, indexValue) {
	return indexValue;
});
console.log('Solution 1: Initial array index values: ', arrayIndexes); /*returns 0,1,2,3,4*/

/*Variant 2*/
const arrayIndexes2 = [];
for (let i = 0; i < initialArray.length; i++) {
	arrayIndexes2.push(i);
}
console.log('Solution 2: Initial array index values: ', arrayIndexes);

const newArray = initialArray.map(function (number, index) {
	return number * index;
});
console.log('New array parameters = value*index:     ', newArray); /*returns 1*0=0, 2*1=2, 3*2=6, 4*3=12, 5*4=20*/
