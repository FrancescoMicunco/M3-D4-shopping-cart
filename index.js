let cardsContainer = document.getElementById("cardsContainer")

fetch("https://striveschool-api.herokuapp.com/books")
    .then(resp => resp.json())
    .then(books => books.forEach(element => {
        let src = element.img
        cardsContainer.innerHTML += `
                <div class = "card col-12 col-md-4 col-lg-3 selected">
        <img src = ${src} class="card-img-top" img-fluid w-100"
        alt = "title" >          
        <div class = "card-body">
        <h5 class = "card-title" > ${element.title} </h5>
        <p class = "card-text" style="font-weight:bold">$ ${element.price}</p>
        <button type="button" class="btn btn-success add">Add to cart</button>
        <button type="button" class="btn btn-outline-primary skip">Skip</button>
        </div> `




    }))
    //end from line 6 then(books =>)

// here we change color of selected card


.then(btn => {
    const cart = []
    let addButton = document.querySelectorAll(".add");
    addButton.forEach(btn => btn.addEventListener("click",
        function(e) {
            let selectedCard = btn.closest("div.card");
            selectedCard.classList.add("bg-secondary")
            cart.push(selectedCard)
            addButton.disable = true;
            console.log(cart)
        }
    ))
})

.then(btn => {

    let skipButton = document.querySelectorAll(".skip");
    skipButton.forEach(btn => btn.addEventListener("click",
            function(e) {
                let selectedCard = btn.closest("div.card");
                selectedCard.classList.add("d-none")

            })

    )
})

.then(input => {

    let inputField = document.getElementById("input");
    let inputValue = inputField.value;
    let arraySearch = []

    fetch("https://striveschool-api.herokuapp.com/books")
        .then(resp => resp.json())
        .then(books => {
            books.forEach(element => {
                inputField.addEventListener("keypress", function(e) {

                    let lettersFromTitleArray = element.title
                    arraySearch.push(e.key)
                    let letterToString = arraySearch.join("")
                    if (letterToString.length > 3) {
                        books.filter(e => { e.substr(0, 3) }, letterToString)
                    }
                })
            })
        })
})

// 1 - create an array with the first three letters of titles






// 2 - chek if someone check with our string
// 3 - if so, create a new array filtered