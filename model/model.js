const fs = require('fs');
const path = require('path');


const model = function (name) {  

    console.log(name)
    return {

        tablePath: path.resolve(__dirname, '../data/', `${name}.json`),

        readFile: function ( ){
            let tableContents = fs.readFileSync(this.tablePath, 'utf-8');
            return JSON.parse(tableContents) || [];
        },

        writeFile : function(contents) {
            let tableContents = JSON.stringify(contents, null, ' ');
            fs.writeFileSync(this.tablePath, tableContents);
        },

        nextId:function() {
            let array = this.readFile();
            let lastElement = array.pop();

            return lastElement.id ? ++lastElement.id : 1;
        },

        all: function() {

            return this.readFile();
        },

        create:function(element) {
            let array = this.all();
            element.id = this.nextId();

            array.push(element);
            this.writeFile(array);

            return element.id;
        },

        find:function(id) {
            let array = this.all();
            return array.find(product => product.id == id);
        },

        offers:function() {
            let array = this.all();
            return array.filter(product => product.oferta == true);
        },

        newProducts:function() {
            let array = this.all();
            return array.filter(product => product.temporada == true);
        },

        update:function(updatedElement) {
            let array = this.all();

            let updatedArray = array.map(product => {
                if (product.id == updatedElement.id) {
                    return updatedElement;
                }

                return product;
            });

            this.writeFile(updatedArray);

            return updatedElement.id;
        },

        delete: function(id) {

            let array = this.all();
            let filteredArray = array.filter(product => {
                return product.id != id;
            });

            // Reasigna ids a todos los elementos del database
            for (let i = 0; i < filteredArray.length; i++) {
                filteredArray[i].id = i + 1;
            }

            console.log(filteredArray);

            this.writeFile(filteredArray);
        },

        // Busca por field al primer elemento de la DB que cumpla con las condiciones de la busqueda, devuelve 1 elemento
        findFirstByField: function(field, text){
            let array = this.all();
            let elementFound = array.find(element => element[field] === text);
            return elementFound;
        },
        // Busca por field a todos los elementos de la DB que cumplan con las condiciones de la busqueda, devuelve 1 array
        findAllByField: function(field, text){
            let array = this.all();
            let allElementsFound = array.filter(element => element[field] === text);
            return allElementsFound;
        }
    }

}

module.exports = model;