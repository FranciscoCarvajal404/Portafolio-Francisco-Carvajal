import {validation} from "./components/validaciones.js";

const inputs = document.querySelectorAll(".form__input");

inputs.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        validation(input.target);
    });
});