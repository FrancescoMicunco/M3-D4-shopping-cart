let cardsContainer = document.getElementById("cardsContainer")


fetch("https://striveschool-api.herokuapp.com/books")
    .then(resp => resp.json())
    .then(books =>

        books.forEach(element => {
            let src = element.img

            cardsContainer.innerHTML += `
                <div class = "card col-12 col-md-4 col-lg-3">
        <img src = ${src} class="card-img-top" img-fluid w-100"
        alt = "title" >          
        <div class = "card-body">
        <h5 class = "card-title" > ${element.title} </h5>
        <p class = "card-text" > ${element.price}</p>
        </div>
        
            `
        })
    )