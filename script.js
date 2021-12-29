let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

Book.prototype.toggleRead = function() {
    if (this.read) this.read = false;
    else this.read = true;
}

function toggleRead (event) {
    let book = myLibrary[event.target.value];
    console.log(book, event);
    book.toggleRead();

    if (book.read)
    event.target.textContent = "Read";
    else event.target.textContent = "Not Read";

    createLibrary();
}

function addBook () {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
        
    createLibrary();
}

function deleteBook(event) {
    myLibrary.splice(event.target.value, 1);
    createLibrary();
}

function createLibrary() {

    deleteLibrary();
    let library = document.querySelector("#library");
    let list = document.createElement("ol");
    library.appendChild(list);
    for (let book of myLibrary) {
        let newBook = document.createElement("li");
        newBook.textContent = book.info();
        list.appendChild(newBook);
        let buttonRow = document.createElement("div");
        buttonRow.classList.add("buttonRow");
        newBook.appendChild(buttonRow);

        createDeleteButton(buttonRow, book);
        createReadButton(buttonRow, book);
    }
}

function createDeleteButton (parent, indexReference) {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.value = myLibrary.indexOf(indexReference);
    addDeleteListeners(deleteButton);
    parent.appendChild(deleteButton);
}

function createReadButton (parent, indexReference) {
    let readButton = document.createElement("button");
    if (indexReference.read) {
        readButton.textContent = "Read";
    } else readButton.textContent = "Not Read";
    readButton.classList.add("read");
    readButton.value = myLibrary.indexOf(indexReference);
    addReadListeners(readButton);
    parent.appendChild(readButton);
}

function deleteLibrary() {
    removeDeleteListeners();
    removeReadListeners();
    let library = document.querySelector("#library");
    let list = document.querySelector("#library ol");
    if (list) library.removeChild(list);

}

function addDeleteListeners(deleteButton) {
    deleteButton.addEventListener("click", deleteBook);

}

function addReadListeners(readButton) {
    readButton.addEventListener("click", toggleRead);
}

function removeDeleteListeners() {
    const deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach( button => {
        button.removeEventListener("click", deleteBook);
    });
}

function removeReadListeners() {
    const readButtons = document.querySelectorAll("read");

    readButtons.forEach( button => {
        button.removeEventListener("click", toggleRead);
    });
}

let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addBook);


