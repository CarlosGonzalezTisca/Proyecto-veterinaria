const mongoose = require('mongoose');
const empleadoSchema= new mongoose.Schema({
    
    "_id":  {
        type:Number,
        required: true,
        unique: true,
    
    },
    "nombre": {
        type :String,
        required:true,

    },
    "apellido1": String,
    "apellido2": String,
    "direccion": String,
    "telefono": Number,
    "direccion":String,
    "telefono":String,
    "correo": {
        type: String,
        required: true,
        unique:true,

    },
    "contrasena":{
        type: String,
        required: true
    },
    "horario": Array,

   
   
   
  

})

mongoose.model('empleado',empleadoSchema);
