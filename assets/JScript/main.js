const products = document.getElementById("products");

function getData() {
    axios.get("https://655dd2b79f1e1093c599f093.mockapi.io/products")
    .then((res)=>{
        let data= res.data
        data.forEach((item)=>{
            let card = document.createElement("div")
            card.className ="col-4"
            card.innerHTML= `<div class="card">
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <p>${item.price} Manat</p>
            <button onclick="adToCart(${item.id})">AD TO CARD</button>
            </div>`
            products.appendChild(card)
        })
    })
}

function adToCart(parametr) {
    axios.post("https://655dd2b79f1e1093c599f093.mockapi.io/basket"),{
        parametr
    }.then(res=> {
        console.log('data gonderildi:'+ res.data);
    })
}

window.onload = ()=>{
    getData()
}