const submitBtn = document.querySelector("#submit-btn");
const inputs = document.getElementsByTagName('input');
const smallErr = document.querySelectorAll(".errorMesg");
let correct;

//validação dos inputs
function validation (){
    const name = inputs.name.value.trim();
    const email = inputs.email.value.trim();
    const password = inputs.password.value.trim();
    const confirmPassword = inputs.confirmPassword.value.trim();
    //correct = 0;

    if (name == ''){
        errorMessage(0, 'This field cannot be empty.');
    }
    else if (name < 5){
        errorMessage(0, 'Name entered is too short. Check if you typed it correctly.');
    } else {
        correctInput(0) 
        //correct++;
    }

    if (email == ''){
        errorMessage(1, 'This field cannot be empty.');
    }
    else if (!(isEmail(email))){
        errorMessage(1, 'E-mail entered doe not exist.');
    } else {
        correctInput(1);
        //correct++; 
    }

    if (password == ''){
        errorMessage(2, 'This field cannot be empty.');
    }
    else if (!(validPassword(password))){
        errorMessage(2, 'must contain numbers, uppercase and lowercase letters, and at least 8 characterse.')
    } else correctInput(2);

    if (confirmPassword == ''){
        errorMessage(3, 'This field cannot be empty.');
    }
    else if (confirmPassword != password){
        errorMessage(3, 'The password must be the same as in the previous field.')
    } else {
        correctInput(3);
        //correct++;
    }
}

//função mensagem de erro
function errorMessage (indexInput, message){
   smallErr[indexInput].innerText = message;
   inputs[indexInput].style.border = "1px solid #913434";
   
   smallErr[indexInput].classList.remove('hide');
   smallErr[indexInput].classList.add('error-message');
}

//se o input nao tiver erros aparentes
function correctInput (indexInput){
    smallErr[indexInput].innerText = '';
    inputs[indexInput].style.border = "none";
   
    smallErr[indexInput].classList.remove('error-message');
    smallErr[indexInput].classList.add('hide');
}

//regex para verificar email
function isEmail(email) {
    const emailOk = /\S+@\S+\.\S+/;

    return emailOk.test(email);
}

//validar senha
function validPassword (password){
    const validP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;

    return validP.test(password);
}

//eventos
submitBtn.addEventListener("click", function (e) {
    validation();
    
    //"submeter" dados caso esteja tudo correto
    /*if (correct == 3){
        submitBtn.type = "submit";
    }*/
});
