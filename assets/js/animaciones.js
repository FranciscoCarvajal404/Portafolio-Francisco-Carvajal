
document.querySelector(".bars-menu").addEventListener("click", animateBars);

var line1_bar = document.querySelector(".bars-menu__line1");
var line2_bar = document.querySelector(".bars-menu__line2");
var line3_bar = document.querySelector(".bars-menu__line3");
var menu = document.querySelector(".menu");

function animateBars(){
    line1_bar.classList.toggle("bars-menu__line1--active");
    line2_bar.classList.toggle("bars-menu__line2--active");
    line3_bar.classList.toggle("bars-menu__line3--active");

    menu.classList.toggle("menu--active");
}



//const label1 =  document.querySelector("#label1");
//const grupo1 =  document.getElementById("#grupo1");
//const input1 =  document.getElementById("#input1");

//input1.addEventListener("focus", animateLabel1);

//function animateLabel1(){
//    grupo1.classList.toggle("focus");
//}