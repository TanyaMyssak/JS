/*В окремому файлі створіть клас 
Електронна книга (EBook), який буде успадковувати властивості та методи класу Book. 
Додайте до класу EBook нову властивість, наприклад, формат файлу. 
Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
(все те саме що і для Book але ще формат файлу). 
Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo*/

import Book from './Book.js';

class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this.fileFormat = fileFormat;
	}

	printEBookInfo() {
		console.log(
			`Now "${this.title} by ${this.author} (${this.year})" is available in e-format to download on your device in ${this.fileFormat}.`,
		);
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(value) {
		if (typeof value !== 'string') {
			console.log('Invalid input.');
			return;
		}
		this._fileFormat = value;
	}

	static createEBookFromBook(book, fileFormat) {
		const newTitle = `${book.title}`;
		return new EBook(newTitle, book.author, book.year, fileFormat);
	}
}
export default EBook;
