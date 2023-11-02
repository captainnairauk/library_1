const myLibrary = [];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function(){
  return `${this.title} is written by ${this.author}, it has ${this.pages} pages and is ${this.read}.`
}

const book1 = new Book("HP", "author1", 295, "not yet read");
console.log(book1.info());
