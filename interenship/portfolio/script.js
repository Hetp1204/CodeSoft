let nav=document.querySelector('nav');
let scrollBtn=document.querySelector('.scroll_button a');

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("sticky");
        scrollBtn.style.display = 'block';
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = 'none';
    }
}

let body=document.querySelector("body");
let navBar=document.querySelector(".navbar");
let menuBtn=document.querySelector(".menu_btn");
let cancelBtn=document.querySelector(".cancle_btn");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity = '0';
    menuBtn.style.pointerEvents = 'none';
    body.style.overflow = 'hidden';
    scrollBtn.style.pointerEvents='none';
}

cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
    body.style.overflow = 'auto';
    scrollBtn.style.pointerEvents='auto';
}

let navLinks =  document.querySelectorAll('.menu li a');
for(var i=0;i<navLinks.length;i++){
    navLinks[1].addEventListener('click',function(){
        navBar.classList.remove('active');
        menuBtn.style.opacity='1';
        menuBtn.style.pointerEvents='auto';
    })
}