hamburger=document.querySelector('.hamburger');
navbar=document.querySelector('.navbar');
navList=document.querySelector('.navoresp');
navRight=document.querySelector('.navRight');

hamburger.addEventListener('click',()=>{
navbar.classList.toggle('navhresp');
navList.classList.toggle('navoresp');
navRight.classList.toggle('navoresp');
})

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navoresp");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".navList a").forEach(n => n.addEventListener("click", function() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const form = document.querySelector(".Form-container form");
const nameInput = form.querySelector('input[type="text"]');
const numberInput = form.querySelector('input[type="number"]');
const emailInput = form.querySelector('input[type="email"]');
const dateInput = form.querySelector('input[type="date"]');
const messageTextarea = form.querySelector('textarea');

// form.addEventListener("submit", function(e) {
//     e.preventDefault(); 

    
//     if(nameInput.value.trim() === "") {
//         alert("Please enter your name.");
//         nameInput.focus();
//         return false;
//     }

   
    // alert("Appointment booked successfully!");
    
//     form.reset(); 
// });


const searchInput = document.getElementById("search");
const searchButton = document.querySelector(".btnSearch");

searchButton.addEventListener("click", function() {
    const query = searchInput.value.trim();
    alert(`Search for: ${query}`);
   
});
