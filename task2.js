/* Завдання 2: Конкатенація радків та шаблонний рядок

Створіть дві змінні, які містять імена двох осіб. 
Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. 
Виведіть результат в консоль. 
Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль. */
import chalk from 'chalk';

let guest1 = "John Smith";
let guest2 = "Jack Brown";

// Concatenation
const greetingConcatenation = "Dear, " + guest1 + " and " + guest2 + " welcome to the party!";
console.log(chalk.bgCyanBright(greetingConcatenation));

// backticks (`) shall be used for template strings!
const greetingTemplate = `Dear, ${guest1} and ${guest2} warm welcome!`;
console.log(chalk.bgYellowBright(greetingTemplate));