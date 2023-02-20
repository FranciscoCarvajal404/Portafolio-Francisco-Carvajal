
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



const inputs = document.querySelectorAll('.form__input');

inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
    if (event.target.value.length) {
        event.target.classList.add("full");
    } else {
        event.target.classList.remove("full");
    }
});
})