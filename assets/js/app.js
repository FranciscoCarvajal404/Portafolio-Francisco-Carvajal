import {validation} from "./components/validaciones.js";
import putPattern from "./components/pattern.js";

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