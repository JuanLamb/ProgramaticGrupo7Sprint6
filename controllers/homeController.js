const model = require('../model/model');

const productModel = model('datosProductos');

let homeController = {

    readHomeProducts: (req, res) => {
    
        const offers = productModel.offers();
    
        const newProducts = productModel.newProducts();
    
        res.render('home', { offers, newProducts });
    }
};

module.exports = homeController;


