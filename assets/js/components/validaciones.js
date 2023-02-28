export function validation(input){
    const inputType = input.dataset.type;
    if (validators[inputType]){
        validators[inputType](input);
    }

    if(input.validity.valid){
        input.classList.remove("form__input--invalid")
        input.nextElementSibling.nextElementSibling.innerHTML ="";
    }else{
        input.classList.add("form__input--invalid")
        input.nextElementSibling.nextElementSibling.innerHTML = showError(inputType, input);
    }
}

const validators ={

}

const errorType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

function showError(inputType, input){
    let message = "";

    errorType.forEach((error) => {
        if(input.validity[error]){
            message = errorMessage[inputType][error];
        }
    });

    return message;
}

const errorMessage ={
    name:{
        valueMissing: "Por favor, ingresa tu nombre"
    },

    email:{
        valueMissing: "Por favor, ingresa tu correo electrónico",
        typeMismatch: "El correo no es válido"
    },

    message:{
        valueMissing: "Por favor, escribe un mensaje"
    },

}
