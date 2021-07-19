
 
    let btnSumbit = document.querySelector('.login-button button');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let form = document.getElementById('login-form');
    let errorElement = document.getElementById('error');

    form.addEventListener('submit', (e) => {
        let errors = [];
        if (email.value === '' || email.value === null){
            errors.push('Debes ingresar un email')
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

        if (errors.length > 0){
            e.preventDefault();
            errorElement.innerText = errors.join(', ');

        }
    })
