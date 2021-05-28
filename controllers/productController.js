const model = require('../model/model');

const productModel = model('datosProductos');


let productController = {

    readAll: (req, res) => {
    
        const products = productModel.all();

        res.render('products/productCatalog', { products });
    },

    readProduct: (req, res) => {

        const product = productModel.find(req.params.id);

        const categoryProducts = productModel.findAllByField("categoria", product.categoria);

/*      Filtraría los productos pero se rompe cuando solamente existe uno de una categoría.

        const filteredProducts = productModel.findAllByField("categoria", product.categoria);
        let categoryProducts = [];
        for (let i = 0; i < 4; i++) {
            categoryProducts.push(filteredProducts[i]);
        }
        
*/

           if (product) {
               res.render('products/productDetail', { product, categoryProducts });
           } else {
               res.render('error404');
           }
       },

    createProduct: (req, res) => {
        res.render('user/productForm');
    },

    recieveForm: (req, res) => {
    
        const product = req.body;

        product.imagen = req.file ? req.file.filename : '';

        // Pregunta si en el oferta y temporada del body vienen strings "true", si es true, lo pasa a booleano, si es false lo pasa a booleano y lo cambia a false
        product.oferta = req.body.oferta == "true" ? true : false;
        product.temporada = req.body.temporada == "true" ? true : false;

        // pregunta si vienen datos de color y talle en el body, en caso de false devuelve un  array vacio
        product.color = product.color ? product.color : [];
        product.talle = product.talle ? product.talle : [];

        // Convierte en array los datos de color y talle en el caso que venga 1 solo dato en los checkboxes del body
        if (typeof product.color === 'string') {
            product.color = [product.color];
        };
        
        if (typeof product.talle === 'string') {
            product.talle = [product.talle];
        };

        productModel.create(product);
   
        res.redirect('/')
    },

    modifyProduct: (req, res) => {
        const product = productModel.find(req.params.id);
        const categoryArray = ["Escalada", "Camperas", "Calzado", "Mochilas"];
        res.render('user/productEdit', { product, categoryArray });
    },

    modifyForm: (req, res) => {
  
        let  product = req.body;
      
        product.id = req.params.id;

        product.imagen = req.file ? req.file.filename : req.body.oldImagen;
        
        if (req.body.imagen === undefined) {
            product.imagen = product.oldImagen
        };
        
        delete product.oldImagen;

        // Pregunta si en el oferta y temporada del body vienen strings "true", si es true, lo pasa a booleano, si es false lo pasa a booleano y lo cambia a false
        product.oferta = req.body.oferta == "true" ? true : false;
        product.temporada = req.body.temporada == "true" ? true : false;

        // pregunta si vienen datos de color y talle en el body, en caso de false devuelve un  array vacio
        product.color = product.color ? product.color : [];
        product.talle = product.talle ? product.talle : [];

        // Convierte en array los datos de color y talle en el caso que venga 1 solo dato en los checkboxes del body
        if (typeof product.color === 'string') {
            product.color = [product.color];
        };

        if (typeof product.talle === 'string') {
            product.talle = [product.talle];
        };

        productModel.update(product);
          
        res.redirect('/products/' + product.id);
    },

    deleteProduct: (req, res) => {

        productModel.delete(req.params.id);
      
        res.redirect('/')
    },
};

module.exports = productController;