/* Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі */

const activeUsers = [
	{ username: 'Editor', email: 'Editor@test.ua', role: 'Accountable Manager' },
	{ username: 'Admin', email: 'admin@test.ua', role: 'Safety Manager' },
	{ username: 'Reviewer', email: 'reviewer@test.ua', role: 'QA Manager' },
	{ username: 'Reader', email: 'reader@test.ua', role: 'Cabin Crew' },
];
for (const { username, email, role } of activeUsers) {
	console.log(`Username: ${username}, Email: ${email}, role: ${role}`);
}
