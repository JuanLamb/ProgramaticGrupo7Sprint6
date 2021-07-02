const express = require('express');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const productController = require('../controllers/productController');
const router = express.Router();

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/images/productos'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get('/', productController.readAll);   /* LISTADO DE PRODUCTOS RENDERIZA CATALOGO DE PRODUCTOS*/

router.get('/create', productController.createProduct);  /* FORMULARIO DE CARGA */

router.get('/search', productController.searchProduct);  /* BUSCA UN PRODUCTO  */

router.get('/cuerdas', productController.searchCuerdas);  /* BUSCA UN PRODUCTO  */

router.get('/arneses', productController.searchArneses);  /* BUSCA UN PRODUCTO  */

router.get('/:id', productController.readProduct);    /* LEER PRODUCTO SEGUN ID */

router.post('/', upload.single('image'), productController.recieveForm);  /* RECIBE DATOS DEL FORMULARIO DE CREACION */

router.get('/:id/edit', productController.modifyProduct);  /* MODIFICA PRODUCTO SEGUN ID */

router.put('/:id', upload.single('image'), productController.modifyForm);   /* RECIBE FORMULARIO DE EDICION */

router.delete('/:id', productController.deleteProduct);  /* ELIMINA PRODUCTO  */





module.exports = router;