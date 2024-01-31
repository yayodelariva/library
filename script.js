const addBookBtn = document.querySelector('#addBookBtn');
    const bookLibrary = document.querySelector('#bookLibrary');
    const bookForm = document.querySelector('#bookForm');
    const Library = document.querySelector('#Library');
    const myLibrary = [];
    let bookNameSelector = document.querySelector('#book_name');

    let bookAuthorSelector = document.querySelector('#author') ;


    bookForm.style.display = 'none'

    class Book {

        constructor(name, author, read) {
            this.name = name
            this.author = author
            this.read = read
        }

        toggleRead() {
            this.read = !this.read;
        }
    }

    
    function toggleRead(index){
        myLibrary[index].toggleRead()
        displayBooks()
    }



    addBookBtn.addEventListener('click', function (e) {
        bookForm.style.display = 'inline'

    })

    bookForm.addEventListener('submit', function(e){
        event.preventDefault();
        addBookToLibrary();
    })

    function addBookToLibrary() {
        let name = bookNameSelector.value;
        let author = bookAuthorSelector.value;
        let newBook = new Book(name, author)
        myLibrary.push(newBook)
        displayBooks();


    }

    function removeBook (index){
        myLibrary.splice(index, 1)
        displayBooks()
    }


    function displayBooks() {
        Library.innerHTML = '';
        for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i];
            let bookEl = document.createElement('div');
            bookEl.innerHTML = `
            <div id="cardContainer">
        <h3 class="title">${book.name}</h3>
        <h4 class="author">${book.author}</h4>
        <h3 class='read'>Read status: ${book.read ? 'Read' : 'Not read yet'}</h3>
        <div class='cardButtons'>
            <button class="readButton" onclick='toggleRead(${i})'>Read</button>
            <button class="deleteButton" onclick='removeBook(${i})'>Delete</button>
        </div>

        </div>`
        
            Library.appendChild(bookEl);
        }
    }