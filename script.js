// function removeBookFromLibrary(bookIndex) {
//   myLibrary.splice(bookIndex, 1);
//   if (bookIndex < myLibrary.length) {
//     for (let i = bookIndex; i < myLibrary.length; i++) {
//       myLibrary[i].index -= 1;
//     }
//   }
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
  }
  info() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  }
  toggleRead() {
    this.read = this.read === "Read" ? "Not read yet" : "Read";
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  getBooks() {
    return this.books;
  }

  addBook(book) {
    book.index = this.books.length;
    this.books.push(book);
  }

  removeBook(bookIndex) {
    this.books.splice(bookIndex, 1);
    if (bookIndex < this.books.length) {
      for (let i = bookIndex; i < this.books.length; i++) {
        this.books[i].index -= 1;
      }
    }
  }
}

class Display {
  constructor() {}
  displayBooks() {
    myLibrary.getBooks().forEach((book) => {
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
      const removeBookBtn = document.createElement("button");
      removeBookBtn.textContent = "Remove";
      removeBookBtn.dataset.index = book.index;
      removeBookBtn.addEventListener("click", (e) => {
        console.log(e.target.dataset.index);
        myLibrary.removeBook(e.target.dataset.index);
        document.querySelector(".book-container").innerHTML = "";
        myDisplay.displayBooks();
      });
      const toggleReadBtn = document.createElement("button");
      toggleReadBtn.textContent = "Toggle Read";
      toggleReadBtn.addEventListener("click", () => {
        book.toggleRead();
        document.querySelector(".book-container").innerHTML = "";
        myDisplay.displayBooks();
      });
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookRead);
      bookCard.appendChild(removeBookBtn);
      bookCard.appendChild(toggleReadBtn);
      document.querySelector(".book-container").appendChild(bookCard);
    });
  }
}

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
//   this.toggleRead = () => {
//     this.read = this.read === "Read" ? "Not read yet" : "Read";
//   };
// }

// function addBookToLibrary(book) {
//   book.index = myLibrary.length;
//   myLibrary.push(book);
// }

// function displayBooks() {
//   myLibrary.forEach((book) => {
//     const bookCard = document.createElement("div");
//     bookCard.classList.add("book-card");
//     const bookTitle = document.createElement("h2");
//     bookTitle.textContent = book.title;
//     const bookAuthor = document.createElement("h3");
//     bookAuthor.textContent = book.author;
//     const bookPages = document.createElement("h3");
//     bookPages.textContent = book.pages;
//     const bookRead = document.createElement("h3");
//     bookRead.textContent = book.read;
//     const removeBookBtn = document.createElement("button");
//     removeBookBtn.textContent = "Remove";
//     removeBookBtn.dataset.index = book.index;
//     removeBookBtn.addEventListener("click", (e) => {
//       console.log(e.target.dataset.index);
//       removeBookFromLibrary(e.target.dataset.index);
//       document.querySelector(".book-container").innerHTML = "";
//       displayBooks();
//     });
//     const toggleReadBtn = document.createElement("button");
//     toggleReadBtn.textContent = "Toggle Read";
//     toggleReadBtn.addEventListener("click", () => {
//       book.toggleRead();
//       bookRead.textContent = book.read;
//     });

//     bookCard.appendChild(bookTitle);
//     bookCard.appendChild(bookAuthor);
//     bookCard.appendChild(bookPages);
//     bookCard.appendChild(bookRead);
//     bookCard.appendChild(removeBookBtn);
//     bookCard.appendChild(toggleReadBtn);
//     document.querySelector(".book-container").appendChild(bookCard);
//   });
// }

let myLibrary = new Library();
let myDisplay = new Display();

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
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myDisplay.displayBooks();

const addBookBtn = document.querySelector(".add-book");
const addBookModal = document.querySelector(".add-book-modal");
addBookBtn.addEventListener("click", () => {
  addBookModal.classList.toggle("active");
});
const submitNewBookForm = document.querySelector(".add-book-form");
submitNewBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBookTitle = document.querySelector("#title").value;
  const newBookAuthor = document.querySelector("#author").value;
  const newBookPages = document.querySelector("#pages").value;
  console.log(document.querySelector("#read").checked);
  const newBookRead = document.querySelector("#read").checked
    ? "Read"
    : "Not read yet";
  const newBook = new Book(
    newBookTitle,
    newBookAuthor,
    newBookPages,
    newBookRead
  );
  myLibrary.addBook(newBook);
  addBookModal.classList.toggle("active");
  document.querySelector(".book-container").innerHTML = "";
  myDisplay.displayBooks();
});
