const express = require('express');
const router = express.Router();
const productController = require('../controllers/productoController.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/create', productController.createProduct);
router.get('/list', productController.getAllProducts);
router.get('/obtener/', productController.getProductById);
router.put('/atualizar/:id', productController.updateProduct);
router.delete('/borrar/:id', productController.deleteProduct);
router.post('/subir/:id', upload.single('file'), productController.uploadFile);


module.exports = router;
