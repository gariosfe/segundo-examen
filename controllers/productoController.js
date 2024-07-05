const Producto = require('../models/productoModel.js'),
express=require('express'),
router=express.Router();


  

exports.createProduct = (req, res) => {
    const body = req.body;
    const newProducto = new Producto({
        nombre: body.nombre,
        marca: body.marca,
        fecha: body.fecha,
        anio: body.anio,
        codigo: body.codigo,
        created_at: body.created_at || Date.now()
    });

    newProducto.save()
        .then(() => {
            res.status(200).json('Datos Guardados');
            console.log("Successfully saved producto to DB");
        })
        .catch(err => {
            console.error("Error saving producto:", err);
            res.status(500).json('Error al guardar datos');
        });
};

exports.getAllProducts = (req, res) => {
    Producto.find()
    .then(productos => {
        res.status(200).json(productos);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json('Error al obtener datos');
    });
};

exports.getProductById = (req, res) => {
    const productoId = req.params.id;
    Producto.findById(productoId)
    .then(producto => {
        if (!producto) return res.status(404).json('Tarea no encontrada');
        res.status(200).json(producto);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json('Error al obtener datos');
    });
};

exports.updateProduct = (req, res) => {
    const productoId = req.params.id;
    const body = req.body;
    Producto.findByIdAndUpdate(productoId, {
        nombre: body.nombre,
        marca: body.marca,
        fecha: body.fecha,
        anio: body.anio,
        codigo: body.codigo,
    }, { new: true })
    .then(producto => {
        if (!producto) return res.status(404).json('Producto no encontrado');
        res.status(200).json('Datos Actualizados');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json('Error al actualizar datos');
    });
};

exports.deleteProduct = (req, res) => {
    const productoId = req.params.id;
    Producto.findByIdAndDelete(productoId)
    .then(producto => {
        if (!producto) return res.status(404).json('Tarea no encontrada');
        res.status(200).json('Tarea Eliminada');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json('Error al eliminar datos');
    });
};
exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json('No file uploaded');
    }
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
};


