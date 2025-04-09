/* Завдання 6.1

Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.

Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)*/

/* Function declaration */

console.log(`Function declaration 1: The area of rectangular A is ${getArea_A(5, 50)} cm2`); /*5*50=250*/

function getArea_A(width_A, height_A) {
    return width_A * height_A;
}
/* or */

function getArea_B(width_B, height_B) {
    let result = width_B * height_B;
    console.log(`Function declaration 2: The area of rectangular B is ${result} cm2`); /*5*10=50*/
}
getArea_B(5, 10)


/* Function Expression */
const getArea_C= function (width_C, height_C) {
    return width_C * height_C;
};
console.log(`Function Expression: The area of rectangular C is ${getArea_C(3, 4)} cm2`);/*3*4=12*/


/* Arrow function */
const getArea_D = (width_D, height_D) => {
    let result = width_D * height_D;
    return result;
}
;
console.log(`Arrow function: The area of rectangular D is ${getArea_D(6, 8)} cm2`);/*3*4=12*/