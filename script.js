// script.js

const categories = [
{
name:"T SHIRT",
count:"12 ITEMS",
img:"images/lucid-tee.jpg",
link:"products.html?category=tshirt"
},

{
name:"HOODIE",
count:"8 ITEMS",
img:"images/hoodie-banner.jpg",
link:"products.html?category=hoodie"
},

{
name:"CARGO",
count:"5 ITEMS",
img:"images/cargo-banner.jpg",
link:"products.html?category=cargo"
},

{
name:"OVERSIZED",
count:"10 ITEMS",
img:"images/oversized-banner.jpg",
link:"products.html?category=oversized"
}
];

let cart = [];

const productList = document.getElementById("product-list");

/* LOAD CATEGORY CARDS */
categories.forEach(cat => {

productList.innerHTML += `
<a href="${cat.link}" class="card reveal" style="text-decoration:none;color:white;">

<img src="${cat.img}" alt="${cat.name}">

<div class="card-content">
<h3>${cat.name}</h3>
<p class="price">${cat.count}</p>

<button>
VIEW COLLECTION
</button>
</div>

</a>
`;

});

/* CART TOGGLE */
function toggleCart(){
document.getElementById("cartBox").classList.toggle("active");
}

/* ORDER */
function orderNow(){

if(cart.length === 0){
alert("Your cart is empty");
return;
}

let text = "New Order - LUCID%0A%0A";

cart.forEach(item=>{
text += `${item.name} - ₹${item.price}%0A`;
});

window.open(`https://wa.me/917025974683?text=${text}`);
}

/* SCROLL ANIMATION */
window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal").forEach(el=>{

const top = el.getBoundingClientRect().top;
const win = window.innerHeight;

if(top < win - 80){
el.classList.add("active");
}

});

});
