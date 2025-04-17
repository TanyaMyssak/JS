/* Завдання 3: Обчислення суми елементів масиву

Вам потрібно створити програму, яка обчислює суму всіх елементів у масиві за допомогою методу reduce.

Ось кроки, які вам потрібно виконати:

Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
Виведіть отриману суму у консоль. */

/*That was easy just copy-paste from lecture*/

const numbersArray = [10, 20, 30, 40, 50, 60, 70];
const sumArraysNumbers = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumArraysNumbers);


