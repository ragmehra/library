let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages,
                    ${this.read ? "read" : "not read yet"}`;
    }
}

function addBook () {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    console.log(myLibrary);

    console.log("title: ", title, "\nauthor: ", author, "\npages: ", 
        pages, "\nread: ", read);
}

function displayBooks() {
    
}




let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addBook);


