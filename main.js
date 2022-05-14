/*
var formslide = document.getElementById("div_form");

function endingmessage(){
    formslide.style.right = "-100px";
    formslide.style.zIndex = "-1";
}
*/
var formslide = document.getElementById("div");
var greetslide = document.getElementById("MainGreet");
var gudbyeslide = document.getElementById("MainGudbye");
function endingmessage(){
    formslide.classList.toggle("fade_form");
    greetslide.classList.toggle("fade_greet");
    gudbyeslide.classList.toggle("fade_gudbye")
}


/* 
- yo just put some words and wrap this up.... or add a welcome screen
*/