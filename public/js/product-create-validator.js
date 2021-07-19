let btnSubmit = document.querySelector('.product-button');
let form = document.getElementById('product-form');
let nombre = document.getElementById('nombre');
let price = document.getElementById('precio');
let discount = document.getElementById('descuento');
let description = document.getElementById('descripcion');
let image = document.getElementById('imagen');
let offer = document.getElementsByClassName('oferta');
let season = document.getElementsByClassName('temporada');
let stockMin = document.getElementById('stockMin');
let stockMax = document.getElementById('stockMax');

let errorElement = document.getElementById('error');

btnSubmit.addEventListener('submit', (e) => {
    let errors = [];

    if (nombre.value === '' || nombre.value.length < 5) {
        errors.push('Debes ingresar un nombre con al menos 5 caracteres');
    };
    
    if (price.value === '') {
        errors.push('Debes ingresar un precio');
    };
    
    if (price.value === '') {
        errors.push('Debes ingresar un descuento (puede ser 0)');
    };
    
    if (description.value === '' || description.value.length < 20) {
        errors.push('Debes ingresar una descripción con al menos 20 caracteres');
    };
    
    if (image.files[0] === undefined) {
        errors.push('Debes subir una imagen valida');
    };

    if (offer.value === '') {
        errors.push('Selecciona una opción')
    };

    if (season.value === '') {
        errors.push('Selecciona una opción')
    };
    
    if (stockMin.value === '') {
        errors.push('Ingresa un stock mínimo')
    };
    
    if (stockMax.value === '') {
        errors.push('Ingresa un stock máximo')
    };

    if (errors.length > 0){
        e.preventDefault();
        errorElement.innerText = errors.join(', ');
    };

    console.log(errors);

});