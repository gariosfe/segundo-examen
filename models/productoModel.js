
const mongoose = require ('mongoose');
Schema = mongoose.Schema;

const ProductoSchema = new mongoose.Schema({
    nombre: {type: String, requiere: true},
    marca: {type: String, requiere: true},
    fecha: {type: Date, requiere: true},
    anio: {type: Number, requiere: true},   
    codigo: {type: String, requiere: true},
});

const Producto =mongoose.model('Producto', ProductoSchema);
module.exports=Producto;
