/* global Cart */
'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
let cartBody = document.querySelector('tbody');// create tbody inside the table

let cart; // declaring a variable 
//let cartList = [];

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  while(cartBody.firstChild) { //body of table, do you have a child?
    cartBody.removeChild(cartBody.firstChild);// while you have this child, remove the child.
  }
  // let cartTableRows = document.querySelectorAll('#cart tbody tr'); //grabing all the table row
  // for (let i = 0; i < cartTableRows.length; i++) {// looping  through items in the cart
  //   if (cartTableRows[i]) { // if item exists at index 
  //     cartTableRows[i].remove();// remove that item at that [i] in the cart
  //   }
  // }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  
  // DONE: Iterate over the items in the cart
  for (let i in cart.items) {// doing the for loop in short hand
    // DONE: Create a TR
    let tRow = document.createElement('tr');
    cartBody.appendChild(tRow);

    // DONE: Create a TD for the delete link, quantity,  and the item
    let deleteTd = document.createElement('td');
    deleteTd.addEventListener('click', removeItemFromCart);
    deleteTd.textContent = 'x';
    deleteTd.id = `${cart.items[i].product}`; //naming the classlist remover // deleter 
    
    let quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    
    let itemTd = document.createElement('td');
    itemTd.textContent = cart.items[i].product; //product name
    tRow.appendChild(itemTd);
    tRow.appendChild(quantityTd);
    tRow.appendChild(deleteTd);
  }


  // console.log(showCart);
  // DONE: Add the TR to the TBODY and each of the TD's to the TR


}

function removeItemFromCart(event) {
console.log(event.target);
  
let deleteTarget = event.target.id;// DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  //if (event.target.classList.contains('remover'))
  //let parsedId =  parseInt(event.target.id); //parsing only the targeted id which is the 'remover'.
  console.log(deleteTarget);
 cart.removeItem(deleteTarget); //removing the parsedId
  // DONE: Save the cart back to local storage
  // cart.saveToLocalStorage();// saving to the local storage
  // DONE: Re-draw the cart table
 renderCart();// calling the cart
}

// This will initialize the page and draw the cart on screen
renderCart();
