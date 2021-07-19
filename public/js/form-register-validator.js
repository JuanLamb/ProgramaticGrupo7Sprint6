
let btnSumbit = document.querySelector('.register-button');
let email = document.getElementById('email');
let password = document.getElementById('password');
let firstName = document.getElementById('nombre-apellido');
let lastName = document.getElementById('apellido');
let user = document.getElementById('usuario');
let birthday = document.getElementById('nacimiento');
let adress = document.getElementById('Calle');
let adressNumber = document.getElementById('domicilio');
let passwordConfirm= document.getElementById('password-confirm');
let avatar = document.getElementById('avatar');

let form = document.getElementById('form-registro');

let errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let errors = [];


    if (firstName.value === '' || firstName.value === null || firstName.value.length <= 2){
        errors.push('Debes ingresar un nombre valido mayor a 2 caracteres')
    }

    if (lastName.value === '' || lastName.value === null || lastName.value.length <= 2){
        errors.push('Debes ingresar un apellido valido mayor a 2 caracteres')
    }

    if (user.value === '' || user.value === null || user.value.length <= 4){
        errors.push('Debes ingresar un nombre de usuario valido mayor a 4 caracteres')
    }

    if (email.value === '' || email.value === null){
        errors.push('Debes ingresar un email')
    }

    if (birthday.value === '' || birthday.value === null){
        errors.push('Debes ingresar un fecha de nacimiento')
    }

    if (adress.value === '' || adress.value === null){
        errors.push('Debes ingresar una calle valida')
    }

    if ( typeof(adressNumber.value) === 'number' || adressNumber.value === '' || adress.Number === null ){
        errors.push('Debes ingresar un numero de calle valido')
    }

    if (password.value.length <= 6 || password.value === null) {
        errors.push('La contraseña debe ser mayor a 6 caracteres');
    }

    if (password.value.length >= 25){
        errors.push('La contraseña no puede superar los 25 caracteres');
    }

    if (password.value === 'contraseña'){
        errors.push('La contraseña no puede ser contraseña');
    }

    if (passwordConfirm.value !== password.value){
        errors.push('Las contraseñas deben ser iguales');
    }

    if (avatar.files[0] === undefined){
        errors.push('Debes subir una imagen');
    }

    console.log(avatar.files[0]);

    if (errors.length > 0){
        e.preventDefault();
        errorElement.innerText = errors.join(', ');

    }

    console.log(errors);
})
