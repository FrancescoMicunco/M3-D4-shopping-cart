let cardsContainer = document.getElementById("cardsContainer")
let books = [];
const cart = [];
const selectedBooks = []


window.onload = () => {

    loadBooks()
}

function loadBooks() {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then(resp => resp.json())
        .then((_books) => {
            books = _books;
            displayBooks();
        })
}


function displayBooks() {
    books.forEach(element =>
        cardsContainer.innerHTML += `
                <div class = "card col-12 col-md-4 col-lg-3 selected">
        <img src = ${element.img} class="card-img-top" img-fluid w-100"
        alt = "title" >          
        <div class = "card-body">
        <h5 class = "card-title" > ${element.title} </h5>
        <p class = "card-text" style="font-weight:bold">$ ${element.price}</p>
        <button type="button" class="btn btn-success onclick="addToCart()">Add to cart</button>
        <button type="button" class="btn btn-outline-primary skip">Skip</button>
        </div> `
    )
}

function addToCart() {
    let selectedCard = btn.closest("div.card");
    selectedCard.classList.add("bg-secondary")
    cart.push(selectedCard)
    addButton.disable = true;
    console.log(cart)
}

function input(query) {
    if (query.length < 3) return;
    selectedBooks = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase));
    console.log(selectedBooks)

}