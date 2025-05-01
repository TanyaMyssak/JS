/* Напишіть функцію яка буде приймати 2 аргументи 
- довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. 
Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд */

function learningPromises(string, timeMlSec) {
    setTimeout(function(){
        console.log(string); 
    }, timeMlSec);
}
learningPromises ("Delayed output", 2000)