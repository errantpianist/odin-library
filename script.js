let myLibrary = [];

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
const book2 = new Book(
  "The Fellowship of the Ring",
  "J.R.R. Tolkien",
  423,
  "Not read yet"
);
const book3 = new Book("The Two Towers", "J.R.R. Tolkien", 352, "Not read yet");
const book4 = new Book(
  "The Return of the King",
  "J.R.R. Tolkien",
  416,
  "Not read yet"
);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
displayBooks();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement("h3");
    bookAuthor.textContent = book.author;
    const bookPages = document.createElement("h3");
    bookPages.textContent = book.pages;
    const bookRead = document.createElement("h3");
    bookRead.textContent = book.read;
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    document.querySelector(".book-container").appendChild(bookCard);
  });
}
