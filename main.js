/*
var formslide = document.getElementById("div_form");

function endingmessage(){
    formslide.style.right = "-100px";
    formslide.style.zIndex = "-1";
}
*/
var formslide = document.getElementById("div");

function endingmessage(){
    formslide.classList.toggle("fade_form");
}


/* look into more sliding pages check to see if z-index will help........
-- just in case you for get, rember in main.js that the Id can do just as much as the style will allow in the regular style id nothing more --

--probably mostly a css fix--
*/