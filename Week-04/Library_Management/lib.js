
let library = [];

let output = document.getElementById("output");


function add(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const genre = document.getElementById("genre").value;

    if(title&&author&&pages&&genre){
        let books = {
            title:title,author:author,pages:pages,genre:genre
        }
    
        library.push(books)
    
        displayBooks()
        document.getElementById("adding").reset();
    }else{
        alert("enter all fields");
    }

}
function searching(){
    let search = document.getElementById("search").value.toLowerCase();
    
    let foundbooks = library.filter(book => book.title.toLowerCase().includes(search))
    
        if(foundbooks.length>0){
            displayBooks(foundbooks);
        }
        else{
            output.innerHTML = 'No such book is found'
        }
}
function displayBooks(books = library){

    output.innerHTML = '';
    
    books.forEach(book =>{
        let bookDiv = document.createElement("div")
        bookDiv.classList.add("book");
    bookDiv.innerHTML = `<h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>`
            output.appendChild(bookDiv)
    })  
}