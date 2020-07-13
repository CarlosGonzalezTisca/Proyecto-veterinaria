const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');
const UsuarioSchema= new mongoose.Schema({

    "_id": Number,
    "correo": String,
    "contraseña": Number,
    "tipo": String
})

mongoose.model('usuario',UsuarioSchema);
