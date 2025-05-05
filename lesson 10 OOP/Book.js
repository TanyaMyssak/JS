/* Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру. */

/* Створіть кілька об'єктів mneaning instances?  */

/*Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
В сеттерах необхідно додати валідацію для переданих значень. 
Використовуйте їх для зміни та отримання значень властивостей.*/

class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	get title() {
		return this._title;
	}
	get author() {
		return this._author;
	}
	get year() {
		return this._year;
	}

	set title(value) {
		if (typeof value !== 'string') {
			console.log('Invalid title');
			return;
		}
		this._title = value;
	}

	set author(value) {
		if (typeof value !== 'string') {
			console.log('Invalid author');
			return;
		}
		this._author = value;
	}
	set year(value) {
		if (typeof value !== 'number') {
			console.log('Invalid year');

			return;
		}
		this._year = value;
	}

	printBookInfo() {
		console.log(`Book title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
	}
	static getOldestBook(books) {
		let oldest = books[0];
		for (let i = 1; i < books.length; i++) {
			if (books[i].year < oldest.year) {
				oldest = books[i];
			}
		}
		return oldest;
	}
}

export default Book;
