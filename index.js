fetch("https://striveschool-api.herokuapp.com/books")
    .then(resp => resp.json())
    .then(data => console.log(data))