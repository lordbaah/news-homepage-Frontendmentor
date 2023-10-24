// selecting elements 
const openbtn = document.querySelector(".open-menu");
const closebtn = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");
const navlinks = document.querySelector(".nav-links");

// function for opening menu
function openMenu() {
    navlinks.classList.add('active');
    closebtn.classList.add('active');
    openbtn.classList.add('active');
    overlay.classList.add('active');
}

// function for closing menu
function closeMenu() {
    navlinks.classList.remove('active');
    closebtn.classList.remove('active');
    openbtn.classList.remove('active');
    overlay.classList.remove('active');
}

// calling function and adding eventlistner to add and remove mobile menu
openbtn.addEventListener("click", openMenu);
closebtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);