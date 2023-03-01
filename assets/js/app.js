import {validation} from "./components/validaciones.js";
import putPattern from "./components/pattern.js";
import autoResize from "./components/resize.js";
import animateBars from "./components/animateBars.js";
import maxlength from "./components/maxlength.js";

const inputs = document.querySelectorAll(".form__input");

inputs.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        validation(input.target);
    });
});

inputs.forEach((input) =>{
    input.addEventListener("focus", (input) =>{
        putPattern(input.target);
    });
});

inputs.forEach((input) =>{
    input.addEventListener("focus", (input) =>{
        maxlength(input.target);
    });
});

const textarea = document.querySelector(".form__input--mensaje");
textarea.addEventListener("input", autoResize, false);

/*Animaciones*/
document.querySelector(".bars-menu").addEventListener("click", animateBars);

inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
    if (event.target.value.length) {
        event.target.classList.add("full");
    } else {
        event.target.classList.remove("full");
    }
});
})