/* Генерація таблиці множення

Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while.

Виберіть число для якого потрібно згенерувати таблицю множення.
Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль. */


let multiplier= 7; 

/* за допомогою циклу for */
console.log("Таблиця множення на " + multiplier + " за допомогою циклу for");
for (let y = 1; y <= 10; y++) {
  console.log(multiplier + " * " + y + " = " + (multiplier * y));
}

/* за допомогою циклу while */
console.log("Таблиця множення на " + multiplier  + " за допомогою циклу while");
let x = 1;
while (x <= 10) {
  console.log(multiplier + " * " + x + " = " + (multiplier * x));
  x++;
}
