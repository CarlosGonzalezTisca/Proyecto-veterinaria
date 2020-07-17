const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    "_id": {
        type: String,
        required: true,
        unique: true
    },
    "nombre": {
        type: String,
        required: true,

    },
    "apellido1": {
        type: String,
        required: true
    },
    "apellido2": String,
    "direccion": { type: String, required: true },
    "telefono": { type: String, required: true },
    "correo": {
        type: String,
        required: true,
        unique: true,

    },
    "contrasena": {
        type: String,
        required: true
    },
    "horario": {type:Array,
    required:true},
})

mongoose.model('empleados', empleadoSchema);