// navbar variables
const nav = document.querySelector('.navbar-list');
const navLinks = document.querySelectorAll('.navbar-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');

// nav toggle function

  navToggleBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
  });
  
  const cartToggleFunc = function () { shoppingCart.classList.toggle('active') }



  // add event on nav-toggle-btn
  navToggleBtn.addEventListener('click', function () {
  
    // If the shopping-cart has an `active` class, it will be removed.
    if (shoppingCart.classList.contains('active')) cartToggleFunc();
  
    navToggleFunc();
  
  });
  
  // add event on cart-toggle-btn
  cartToggleBtn.addEventListener('click', function () {
  
    // If the navbar-nav has an `active` class, it will be removed.
    if (nav.classList.contains('active')) navToggleFunc();
  
    cartToggleFunc();
  
  });