/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const signUpBtn = document.getElementById('signup');
const signInBtn = document.getElementById('login');
// IIFE for navBar control
const navBar = (() => {
  // select DOM element and assign to variable
  const mainNav = document.querySelector('.js-main-nav');
  const navBarToggle = document.querySelector('.js-navbar__toggle');

  // listen for click event
  navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
})();

const resetBtn = document.getElementById('reset-pass');
const logInBtn = document.getElementById('logged-in');

resetBtn.onclick = function forgBtnClicked() {
  document.getElementById('signin-display').style.display = 'none';
  document.getElementById('reset-display').style.display = 'block';
};
logInBtn.onclick = function logBtnClicked() {
  document.getElementById('reset-display').style.display = 'none';
  document.getElementById('signin-display').style.display = 'block';
};

// IIFE to inject year dynamically
const date = (() => {
  // select DOM element and assign to variable
  const year = document.querySelector('.js-date');
  year.innerHTML = new Date().getFullYear();
})();
