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


/* 
- focus on greeting message 
- after make sure the Gudbye msg show after the form is gone 

--maybe add a better greeting screen before the putting in form proccess start
*/