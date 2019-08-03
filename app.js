


//Book Class: Represents a Book

class Book {
    constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    }
}

//UI Class: Handle UI Task 
//THE TOOLS THAT YOU COME BACK TO AND USE
//THE TOOLS THAT YOU COME BACK TO AND USE
//THE TOOLS THAT YOU COME BACK TO AND USE
class UI {
    //Static is basically just a way of creating a method inside a constructor setting 
    static displayBooks()
    {
        const StoredBooks = [{title: 'Book One', author: 'John Doe', isbn: '3434434'},{title: 'Book Two', author: 'Jane Doe', isbn: '45545'}];
        
            
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    //Static is like the default declaration you would add with any method you create inside a constructor
    static addBookToList(book)
    {
        //Targets the empty booklist box
        const list = document.querySelector('#book-list');
        //creates a table row
        const row = document.createElement('tr');
        //Adds table data to the table row created in the variable list
        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        //Pretty much concatenate the elements together
        list.appendChild(row);
    }
    static deleteBook(el){
        //If the class target element contains the class 'delete' then delete the entire list item 
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    
    static showAlert(message, className){
        /*Pretty much creating this from scratch: <div class="alert alert-success">Whatever the message may be</div> */
        //creates a div element
        const div = document.createElement('div');
        //creates a class for that element
        div.className = `alert alert-${className}`;
        //appends the message with the div class
        div.appendChild(document.createTextNode(message));
        //selects the container within the html
        const container = document.querySelector('.container');
        //selects all the field's list item boxes
        const form = document.querySelector('#book-form');
        //Appends and inert the newly created message before the container
        container.insertBefore(div, form);
        
        //Vanish in 3 seconds
        //Anything that has the class of 'alert', remove it in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
         
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//Store Class: Handles Storage 
class Store{
    getBooks(){
        
    }
    
    static addBook(book){
        
    }
    
    static removeBook(isbn){
        
    }
}

//Event: Display Books, when the browser loads it displays the current books being held
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event: Add a Book, when the user submits it collects user data and add it into the system
document.querySelector('#book-form').addEventListener('submit', (e) =>{
    //Prevent actual submit
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    
    //validate
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('Please fill in all fields', 'danger');
       } else {
           
    
    //Instantiate Book
    const book = new Book(title, author, isbn);
    
    //Add Book to UI
    UI.addBookToList(book);
    
    //Show success message
    UI.showAlert('Book Added', 'success');
           
    //Clear fields 
    UI.clearFields();
    
}});
//Event: Remove a Book
//When a user clicks on the list item it sends that info to the'deleteBook' method but only deletes it if the targeted element clicked on contains the class 'delete'
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    
    //Show success message
    UI.showAlert('Book Removed', 'success');
})

































