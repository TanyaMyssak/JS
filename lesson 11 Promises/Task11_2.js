/*В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом 
<https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user

Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
Присвойте значення отримані від цих виразів до змінних */


function fetchTask() {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching tasks:', error));
}

function fetchUser() {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching users:', error));
}


const promiseUser = fetchUser();
const promiseTask = fetchTask();
const promisesAll = Promise.all([promiseUser, promiseTask]);


Promise.all([fetchUser(), fetchTask()])
    .then(results => {
        const user = results[0];
        const task = results[1];
        console.log('ALL: Both promises completed:');
        console.log('USER:', user);
        console.log('TASK:', task);
    })
    .catch(error => {
        console.error('ALL: Something went wrong:', error);
    });

    Promise.race([fetchUser(), fetchTask()])
    .then(result => {
        console.log('RACE: First finished promise:', result);
    })
    .catch(error => {
        console.error('RACE: Something went wrong:', error);
    });