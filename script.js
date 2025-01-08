document.addEventListener('DOMContentLoaded',function(){
const menuT= document.querySelector('.menu-toggle');
const navLinks= document.querySelector('.nav-links');

menuT.addEventListener('click',function(){

    navLinks.classList.toggle('active');
})
const icon = menuT.querySelector('i');
icon.classList.toggle('fa-bars');
icon.classList.toggle('fa-xmark');
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
