// book class: represents a book 
class book {
    constructor(title, author, price, pub, language, genre){
     this.title = title;
     this.author = author;
     this.price = price;
     this.pub = pub;
     this.language = language;
     this.genre = genre;
    }
}

//UI class: handle UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            
             {
                title: 'Harry Potter',
                author: 'J.K.Rowling',
                price: '$132',
                pub: '06/26/1997',
                language: 'EN',
                type: 'Fantasy',

            },
            {
                title: 'No Game No Life',
                author: 'YU Kamiya',
                price: '$27',
                pub: '04/25/2012',
                language: 'EN',
                type: 'Science-fiction',

            },
            {
                title: 'The butcher',
                author: 'Hassan Joundi',
                price: '$22',
                pub: '01/11/2011',
                language: 'AR',
                type: 'Horror',

            },
           
            {
                title: 'Central Park',
                author: 'Guillaume Musso',
                price: '$35',
                pub: '03/27/2014',
                language: 'EN',
                type: 'Crime and mystery',

            },
            {
                title: 'Jujutsu Kaisen',
                author: 'Gege Akutami',
                price: '$119',
                pub: '03/05/2018',
                language: 'EN',
                type: 'Supernatural',

            },
            {
                title: 'Les miserables',
                author: 'Victor Hugo',
                price: '$81',
                pub: '-/-/1862',
                language: 'FR',
                type: 'Epic novel',

            },
            {
                title: 'Fables de la Fontaine',
                author: 'Jean De La Fontaine',
                price: '$49',
                pub: '-/-/1694',
                language: 'FR',
                type: 'Fable',

            },
            {
                title: 'Piano book for adult beginners',
                author: 'Damon Ferrante',
                price: '$55',
                pub: '07/23/2017',
                language: 'EN',
                type: 'Musical score',

            },
            {
                title: 'Arabian love poems',
                author: 'Nizar al Qabbani',
                price: '$31',
                pub: '-/-/1998',
                language: 'AR',
                type: 'Poetry',

            }
        ];

        const books = StoredBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.number}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
        <td>${book.pub}</td>
        <td>${book.language}</td>
        <td>${book.genre}</td>
        <td><p>hello</p></td>
        <td><a href="#" class="btn">X</a></td>
        `;

        list.appendChild(row)

    }
    addBookToList = 

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#price').value = '';
        document.querySelector('#pub').value = '';
        document.querySelector('#language').value = '';
        document.querySelector('#genre').value = '';

    }
}

//store class: handles storage

//event: display books

document.addEventListener('DOMcontentLoaded', UI.displayBooks);

//event: add a book

document.querySelector('#book-form').addEventListener('submit', (e)
=> {
    //prevent actual submit
    e.preventDefault()
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const price = document.querySelector('#price').value;
    const pub = document.querySelector('#pub').value;
    const language = document.querySelector('#language').value;
    const genre = document.querySelector('#genre').value;

    //validate
    if(title === '' || author === '' || price === '' || pub === '' || language === '' || genre === '') {}
    
    //instatiate book
    const book = new book(title, author, price, pub, language, genre);

    // add book to UI
    UI.addBookToList(book);

    //clear field
    UI.clearFields();
});
//event: remove a book

document.querySelector('#book-list').addEventListener('click', (e)
=> {
    UI.deleteBook(e.target) 
});

//event: modify the book