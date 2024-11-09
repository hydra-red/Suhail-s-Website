let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let rightnav=document.querySelector('.rightnav');
let navlist = document.querySelector(".nav-list");
burger.addEventListener('click', function(){
    rightnav.classList.toggle('vclass')
    navlist.classList.toggle('vclass')
    navbar.classList.toggle('hclass')
    
})