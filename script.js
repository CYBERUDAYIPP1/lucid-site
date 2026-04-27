// script.js

const products = [
{
name:"T SHIRT",
price:299,
img:"https://ibb.co/Vcx9Q3kS/400x500",
sizes:["S","M","L","XL"]
},
{
name:"Lucid Red Hoodie",
price:799,
img:"https://via.placeholder.com/400x500",
sizes:["M","L","XL"]
},
{
name:"Oversized Street Tee",
price:599,
img:"https://via.placeholder.com/400x500",
sizes:["S","M","L"]
},
{
name:"Lucid Cargo Fit",
price:999,
img:"https://via.placeholder.com/400x500",
sizes:["M","L","XL"]
}
];

let cart = [];

const productList = document.getElementById("product-list");

/* LOAD PRODUCTS */
products.forEach((p,index)=>{

productList.innerHTML += `
<div class="card reveal">

<img src="${p.img}">

<div class="card-content">
<h3>${p.name}</h3>
<p class="price">₹${p.price}</p>

<select id="size-${index}">
${p.sizes.map(size=>`<option>${size}</option>`).join("")}
</select>

<button onclick="addToCart(${index})">ADD TO CART</button>
</div>

</div>
`;

});

/* ADD CART */
function addToCart(index){

const size = document.getElementById(`size-${index}`).value;

cart.push({
...products[index],
selectedSize:size
});

updateCart();
}

/* UPDATE CART */
function updateCart(){

const cartItems = document.getElementById("cart-items");
const count = document.getElementById("cart-count");

cartItems.innerHTML = "";

cart.forEach((item)=>{

cartItems.innerHTML += `
<div class="cart-item">
${item.name} (${item.selectedSize}) - ₹${item.price}
</div>
`;

});

count.innerText = cart.length;
}

/* TOGGLE CART */
function toggleCart(){
document.getElementById("cartBox").classList.toggle("active");
}

/* ORDER */
function orderNow(){

let text = "New Order - LUCID%0A%0A";

cart.forEach(item=>{
text += `${item.name} (${item.selectedSize}) - ₹${item.price}%0A`;
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
