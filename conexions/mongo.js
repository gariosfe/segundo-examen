var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/examen');

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado MongoDb');
});
module.exports=connection