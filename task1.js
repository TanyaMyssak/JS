/* Завдання 1: Оголошення змінних для примітивних типів
Створіть програму, в якій ви оголосите змінні для кожного 
з примітивних типів даних: рядок, число, буль, null та undefined. 
Присвойте їм значення та виведіть кожну змінну на консоль. */

import chalk from 'chalk';

let string = "Home work 4";
let number = 4;
let isBoolean = true;
let x = null;
let y;

console.log(chalk.bgCyanBright(string));
console.log("Check type:", typeof string)//Checks variable type
console.log(chalk.bgYellowBright(number));
console.log("Check type:", typeof number)//Checks variable type
console.log(chalk.bgGreen(isBoolean));
console.log("Check type:", typeof isBoolean) //Checks variable type
console.log(x);//chalk is not working here 
console.log("Check type:", typeof x) //Checks variable type
console.log(chalk.bgRedBright(y));
console.log("Check type:", typeof y) //Checks variable type