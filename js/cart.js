/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  getElementById("cart-container");
  for (var i in Product.allProducts) document.createElement("tr");
  document.createElement("td");
  // TODO: Find the table body
var tableBody = document.querySelector('#cart tbody');
for (var i in cart.items){
  var tr = document.createElement('tr');

  var xTD = document.createElement('td'); 
  xTD.textContent = 'x';
  xTD.classList.add('remover');
  xTD.id = i;

  var qTD = document.createElement('td');
  qTD.textContent = cart.items[i].quantitiy;

  var iTD = document.createElement('td');
  iTD.textContent = cart.items[i].product;

  tableBody.appendChild(tr);
  tr.appendChild(xTD);
  tr.appendChild(qTD);
  tr.appendchild(iTD);
}

showCart()

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();
