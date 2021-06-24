window.onload = () => {
        fetch("https://striveschool-api.herokuapp.com/books", {
            "method": "GET"
        })
        .then(resp => {
            return resp.json()
        })
        .then((data) => {   

                let bookID = document.getElementById("books")
                data.slice(0,5).forEach(book => {
                    return bookID.innerHTML +=  `<div class="card" style="width: 18rem;">
                    <img src=${book.img} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.category}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
                })
                
        })
        .catch((error) => {
            console.log("error");
        })

}

const changeStyle = function () {
    let btn = document.getElementById("addToCart")
    btn.addEventListener("click", style)}

const style = function () { 
        btn.classList.add = ".btn-success"
}