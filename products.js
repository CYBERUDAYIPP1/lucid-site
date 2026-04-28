const allProducts = [
{
category:"tshirt",
name:"Lucid Tee Black",
price:299,
img:"images/lucid-tee.jpg",
sizes:["S","M","L","XL"]
},
{
category:"hoodie",
name:"Lucid Hoodie",
price:799,
img:"images/hoodie-banner.jpg",
sizes:["M","L","XL"]
}
];

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

document.getElementById("category-title").innerText =
category.toUpperCase() + " COLLECTION";

const productList = document.getElementById("product-list");

const filtered = allProducts.filter(p => p.category === category);

filtered.forEach(p => {
productList.innerHTML += `
<div class="card">
<img src="${p.img}">
<div class="card-content">
<h3>${p.name}</h3>
<p class="price">₹${p.price}</p>
<button onclick="orderNow('${p.name}',${p.price})">BUY NOW</button>
</div>
</div>
`;
});

function orderNow(name,price){
window.open(`https://wa.me/917025974683?text=Order:%20${name}%20₹${price}`);
}
