const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menu = document.querySelector('.menu-nav');

let menuOpen = false;

const togggleMenu = () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    hamburger.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
  }
}
menuBtn.addEventListener('click',  togggleMenu)