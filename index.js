hamburger=document.querySelector('.hamburger');
navbar=document.querySelector('.navbar');
navList=document.querySelector('.navoresp');
navRight=document.querySelector('.navRight');

hamburger.addEventListener('click',()=>{
navbar.classList.toggle('navhresp');
navList.classList.toggle('navoresp');
navRight.classList.toggle('navoresp');
})