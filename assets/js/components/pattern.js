export default putPattern;

function putPattern(input){
    const inputType = input.dataset.type;
    if (validators[inputType]){
        validators[inputType](input);
    }
    const reg = regex[inputType];
    input.setAttribute("pattern", reg);
}

const validators ={

}

const regex = {
    name: "[s\\S]{3,50}",

    email: "",

    subject: new RegExp(),

    message: new RegExp(),
}