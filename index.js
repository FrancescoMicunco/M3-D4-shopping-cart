let cardsContainer = document.getElementById("cardsContainer")

fetch("https://striveschool-api.herokuapp.com/books")
    .then(resp => resp.json())
    .then(books =>


        books.forEach(element => {

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
        })
    ) //end from line 6 then(books =>)

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