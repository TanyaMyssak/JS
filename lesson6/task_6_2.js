/* Завдання 2

Створіть функцію яка приймає один параметр: age.
Усередині функції перевірте, чи age більше або рівне 18.
Якщо age відповідає умові, поверніть true, інакше поверніть false.
Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку. */

/* Function declaration */
function isAdult(age) {
    if (age >= 18) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(`Is person full-aged? ${isAdult(15)}`);

/* Function Expression */

const isAdult_FE = function (age_FE) {
    if (age_FE >= 18) {
        return true;
    } else {
        return false;
    }
};
let age_FE = 25;
console.log(`${age_FE}: Is person full-aged? ${isAdult_FE(age_FE)} `);

/* Arrow function variant 1*/
const isAdult_AF = (age_AF) => {
    if (age_AF >= 18) {
        return "YES";
    } else {
        return "NO";
    }
};
console.log(`Is person full-aged? ${isAdult_AF(55)}`);

/* Arrow function variant 2*/
const isAdult3 = (age) => {
    const answer = age >= 18 ? "YES" : "NO";
    console.log(`Is ${age} y.o. person considered to be full-aged? ${answer}`);
};
isAdult3(25);


