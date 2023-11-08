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

const table = document.querySelector('table');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const btn = document.querySelector('button');

function addBook(){
  const titleVal = title.value;
  title.value = '';

  const authorVal = author.value;
  author.value = '';

  const pagesVal = pages.value;
  pages.value = '';

  // const readVal = read.value;
  // read.value = '';
  if(titleVal.trim() === '' || authorVal.trim() === '' || pagesVal.trim() === ''){
    return;
  }
  const row = document.createElement('tr');
  const titleTd = document.createElement('td');
  const authorTd = document.createElement('td');
  const pagesTd = document.createElement('td');
  const readTd = document.createElement('td');
  const btnTd = document.createElement('td');
  const del = document.createElement('button');

  row.appendChild(titleTd);
  titleTd.textContent = titleVal;
  row.appendChild(authorTd);
  authorTd.textContent = authorVal;
  row.appendChild(pagesTd);
  pagesTd.textContent = pagesVal;
  row.appendChild(readTd);

  if(read.checked === true){
    readTd.textContent = "Yes";
  } else{
    readTd.textContent = "No";
  }

  row.appendChild(btnTd);
  btnTd.appendChild(del);
  del.textContent = "Delete";
  table.appendChild(row);

  del.addEventListener('click', () =>{
    table.removeChild(row);
  });

  title.focus();
}

btn.addEventListener('click', addBook);
btn.addEventListener('click', function(){
  read.checked = false;
})
