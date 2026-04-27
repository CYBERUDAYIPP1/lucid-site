// PRODUCTS DATA
const products = [
  { name: "Lucid Tshirt", price: 299, img: "https://via.placeholder.com/300", sizes: ["S","M","L","XL"] },
  { name: "Lucid Hoodie", price: 700, img: "https://via.placeholder.com/300", sizes: ["M","L","XL"] },
  { name: "Oversized Shirt", price: 599, img: "https://via.placeholder.com/300", sizes: ["S","M","L"] }
];

let cart = [];

// LOAD CART FROM STORAGE
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

// GET PRODUCT LIST
const productList = document.getElementById("product-list");

// SHOW PRODUCTS
products.forEach((p, index) => {
  productList.innerHTML += `
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>

      <select id="size-${index}">
        ${p.sizes.map(size => `<option value="${size}">${size}</option>`).join("")}
      </select>

      <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
  `;
});

// ADD TO CART
function addToCart(index) {
  const size = document.getElementById(`size-${index}`).value;

  const existingItem = cart.find(
    item => item.name === products[index].name && item.selectedSize === size
  );

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      ...products[index],
      selectedSize: size,
      qty: 1
    });
  }

  saveCart();
  updateCart();
}
// REMOVE TO CART
function removeItem(index) {
  cart.splice(index, 1); // remove item
  saveCart();
  updateCart();
}

// SAVE CART
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// UPDATE CART
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");

  cartItems.innerHTML = "";

  let totalCount = 0;

  cart.forEach((item, index) => {
    totalCount += item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          ${item.name} (${item.selectedSize}) <br>
          ₹${item.price} x ${item.qty}
        </div>

        <div class="qty-box">
          <button onclick="decreaseQty(${index})">➖</button>
          <span>${item.qty}</span>
          <button onclick="increaseQty(${index})">➕</button>
        </div>
      </div>
    `;
  });

  count.innerText = totalCount;
}

// QUANTITY ADD
function increaseQty(index) {
  cart[index].qty += 1;
  saveCart();
  updateCart();
}

function decreaseQty(index) {
  cart[index].qty -= 1;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCart();
}

// TOGGLE CART
function toggleCart() {
  document.getElementById("cartBox").classList.toggle("active");
}

// WHATSAPP ORDER
function orderNow() {
  let text = "Order from LUCID:%0A";

  cart.forEach(item => {
    text += `${item.name} (${item.selectedSize}) - ₹${item.price}%0A`;
  });

  window.open(`https://wa.me/91YOURNUMBER?text=${text}`);
}

// INIT
updateCart();
