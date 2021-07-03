const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Products = db.Product;
const Images = db.Image;
const Categories = db.Category;
const Brands = db.Brand;
const Genders = db.Gender;

let productController = {

    readAll: async (req, res) => {
        try{
            let products = await Products.findAll({
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
            res.render('products/productCatalog', { products });
        }catch(error){
            console.log(error);
            return res.status(500);
        }

    },

    readProduct: async (req, res) => {
        try {
            const product = await Products.findByPk(req.params.id);
            
            if (product) {
                res.render('products/productDetail', { product });
            } else {
                res.render('error404');
            }
        } catch (error) {
            console.log(error);
            return res.status(500);
        }

        // const categoryProducts = productModel.findAllByField("categoria", product.categoria);
/*      Filtraría los productos pero se rompe cuando solamente existe uno de una categoría.
        const filteredProducts = productModel.findAllByField("categoria", product.categoria);
        let categoryProducts = [];
        for (let i = 0; i < 4; i++) {
            categoryProducts.push(filteredProducts[i]);
        }  
*/
    },

    createProduct: (req, res) => {
        res.render('user/productForm');
    },

    recieveForm: async (req, res) => {
        try {
            const product = req.body;

            product.image = req.file ? req.file.filename : '';

            let productoCreado = await Products.create(product);
            console.log("se creo el producto");
    
            let productImage = await Images.create({
                name: product.image, 
                productId: productoCreado.id
            });
            res.redirect('/')
        } catch (error) {
            console.log(error);
            return res.status(500);
        }

    },

    modifyProduct: async (req, res) => {
        try {
            const product = await Products.findOne({
                where: {id : req.params.id}, 
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
            const productCategories = await Categories.findAll();
            const productBrands = await Brands.findAll();
            const productGenders = await Genders.findAll();
            const productImages = await Images.findOne({where: {productId: product.id}});
            res.render('user/productEdit', { product, productCategories, productBrands, productGenders, productImages });
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    modifyForm: async (req, res) => {
        try {
            let product = req.body;
            product.image = req.file ? req.file.filename : req.body.oldImagen;
            if (req.body.image === undefined) {
                product.image = product.oldImagen
            };
            delete product.oldImagen;
            let updatedProduct = await Products.update({ 
                name: product.name,
                price: product.price,
                stockMin: product.stockMin,
                stockMax: product.stockMax,
                discount: product.discount,
                description: product.description,
                offer: product.offer,
                season: product.season,
                brandId: product.brandId,
                colorId: product.colorId,
                sizeId: product.sizeId,
                categoryId: product.categoryId,
                genderId: product.genderId 
            },
                {where: { id: req.params.id }});

            let productImage = await Images.update({
                name: product.image
            },
                {where: {productId: req.params.id}});

            res.redirect('/products/' + req.params.id);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    deleteProduct: async (req, res) => {

        let deletedProduct = await Products.destroy({where: {id : req.params.id}});
      
        res.redirect('/')
    },

    searchProduct: async (req, res) => {
        try {
            let { search } = req.query;
            search = search.toLowerCase();
            let products = await Products.findAll({
                where: {
                    name:  {[Op.like]: `%${search}%`}
                },
                include: ["brand", "gender", "color", "size", "category", "image"]
            })
             res.render('products/productCatalog', { products })
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    searchNewProduct: async (req, res) => {
        try {
            let products = [];
            if (req.params.category === "cuerdas" || req.params.category === "arneses" ) {

                let filter = req.params.category === "cuerdas" ? "cuerda" : "arnes";
                products = await Products.findAll({
                where: {
                    name:  {[Op.like]: `%${filter}%`}
                },
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
            } else {
                let filter = 0;
                switch (req.params.category) {
                    case "escalada":
                        filter = 1;
                        break;
                    case "camperas":
                        filter = 2;
                        break;
                    case "calzado":
                        filter = 3;
                        break;
                    case "mochilas":
                        filter = 4;
                }
                products = await Products.findAll({
                where: {
                    categoryId: filter
                },
                include: ["brand", "gender", "color", "size", "category", "image"]
            })};
            
                res.render('products/productCatalog', { products })
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    searchArneses: async (req, res) => {
        try {
            let products = await Products.findAll({
                where: {
                    name:  {[Op.like]: `%arnes%`}
                },
                include: ["brand", "gender", "color", "size", "category", "image"]
            })
             res.render('products/productCatalog', { products })
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
};

module.exports = productController;