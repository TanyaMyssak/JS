/* Завдання 3

Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

 */
async function fetchTask() {
	const url = 'https://jsonplaceholder.typicode.com/todos/1';
	const response = await fetch(url);
	const data = await response.json();
	console.log('Task:', data);
	return data;
}
async function fetchUser() {
	const url = 'https://jsonplaceholder.typicode.com/users/1';
	const response = await fetch(url);
	const data = await response.json();
	console.log('User :', data);
	return data;
}
Promise.all([fetchUser(), fetchTask()])
	.then((results) => {
		const user = results[0];
		const task = results[1];
		console.log('ALL SUCCESS: Both promises completed:');
		console.log('USER:', user);
		console.log('TASK:', task);
	})
	.catch((error) => {
		console.error('ALL ERROR: Something went wrong:', error);
	});

Promise.race([fetchUser(), fetchTask()])
	.then((result) => {
		console.log('RACE SUCCESS: First finished promise:', result);
	})
	.catch((error) => {
		console.error('RACE ERROR: Something went wrong:', error);
	});
