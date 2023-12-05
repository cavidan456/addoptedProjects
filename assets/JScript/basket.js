const basket =document.getElementById("basket");


//axios get
function getCart() {
    axios.get("https://655dd2b79f1e1093c599f093.mockapi.io/basket")
    .then(res=>{
        let data =res.data
        data.forEach(element => {
            let card = document.createElement("div")
            card.className = "col-4"
            card.innerHTML= `<div>
            <img src="${element.image}"/>
            <p>${element.title}</p>
            <p>${element.price} Manat</p>
            <button onclick='deleteItem(${element.id})'>Delete</button>
            </div>`
            basket.appendChild(card)
        });
    })
}

function deleteItem(ID) {
    axios.delete(`https://655dd2b79f1e1093c599f093.mockapi.io/basket/${ID}`)
}

window.onload=()=>{
    getCart()
}