'use strict';

const cartsArray = [];
// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  this.items.push(new CartItem(product, quantity));
  // DONE-TODO: Fill in this instance method to create a new CartItem and add it to this.items
};

Cart.prototype.saveToLocalStorage = function() {
  const saveAll = JSON.stringify(this.items);
  localStorage.setItem('cart', saveAll);
  // DONE: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function(item) {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].product === item) {
      this.items.splice(i, 1);
      break;
    }
    this.saveToLocalStorage();
  }
};


// DONE: Fill in this instance method to remove one item from the cart.
// Note: You will have to decide what kind of parameter to pass in here!


const CartItem = function(product, quantity) {
  this.product = product;
  // converted the quantity into a interger to be able to add in catalog.
  this.quantity = parseInt(quantity);
};


// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];


function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names

generateCatalog();
