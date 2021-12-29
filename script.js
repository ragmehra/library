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
    }
}

function deleteLibrary() {
    let library = document.querySelector("#library");
    let list = document.querySelector("#library ol");
    console.log(library, list);
    if (list) library.removeChild(list);

}


let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addBook);


