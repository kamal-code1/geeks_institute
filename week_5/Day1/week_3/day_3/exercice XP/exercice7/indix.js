const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector("section.listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");

  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;

  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImg);

  if (book.alreadyRead) {
    bookDiv.style.color = "red";
  }

  section.appendChild(bookDiv);
});
