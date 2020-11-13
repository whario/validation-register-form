const registerUser = {
    name: '',
    lastname: '',
    email:'',
    password:'',
    reapet:'',
}

function SubmitForm (event) {
    event.preventDefault();
    let Validate = true;
    for(let index in registerUser){
        if(registerUser[index]==''){
            Validate = false;
            break;
        }
    }
    if (Validate == false){
        error('Todos los campos son obligatorios');
    } else if (registerUser.password!=registerUser.reapet){
        error('Las contraseñas no coinciden');
    } else {
        document.querySelector('#send').classList.add('hidden');
        document.querySelector('#loading').classList.remove('hidden');
    }
}
function FormInputs (event) {
    registerUser[event.target.name] = event.target.value;
}
function error (message){
    const error = document.querySelector('#error');
    error.classList.remove('hidden');
    error.innerHTML = message;
}

 /*
Como ambos if repiten código y solo cambia el código repetido lo paso a function error y reduzco los if
if (Validate == false){
        const error = document.querySelector('#error');
        error.classList.remove('hidden');
        error.innerHTML='Todos los campos son obligatorios';
    }
    if (registerUser.password!=registerUser.reapet){
        const error = document.querySelector('#error');
        error.classList.remove('hidden');
        error.innerHTML='Las contraseñas no coinciden';
    }
 */