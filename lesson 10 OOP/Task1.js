import Book from './Book.js';
import EBook from './eBook.js';

// Books
const book1 = new Book('Going Postal', 'Terry Pratchett', 2004);
const book2 = new Book("Harry Potter and the Philosopher's Stone", 'Joanne Rowling', 1997);
const book3 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937);

// eBooks
const ebook1 = new EBook('Plague', 'Albert Camus', 1947, 'pdf');
const ebook2 = new EBook('1984', 'George Orwell', 1949, 'epub');
const ebook3 = new EBook('The Catcher in the Rye', 'J.D. Salinger', 1951, 'azw3');

const books = [book1, book2, book3, ebook1, ebook2, ebook3];

const oldestBook = Book.getOldestBook(books);

console.log(
	`The oldest book in our library is: ${oldestBook.title}, by ${oldestBook.author}, published in ${oldestBook.year}`,
);

const ebook4 = EBook.createEBookFromBook(book1, 'mobi');
ebook4.printEBookInfo();
