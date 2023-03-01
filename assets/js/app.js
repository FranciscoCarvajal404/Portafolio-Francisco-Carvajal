import {validation} from "./components/validaciones.js";
import putPattern from "./components/pattern.js";
import autoResize from "./components/resize.js";

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

const textarea = document.querySelector(".form__input--mensaje");
textarea.addEventListener("input", autoResize, false);