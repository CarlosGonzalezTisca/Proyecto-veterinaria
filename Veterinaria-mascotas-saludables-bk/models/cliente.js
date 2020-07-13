const mongoose = require('mongoose');
const ClienteSchema= new mongoose.Schema({
    
    "_id": Number,
    "nombre": String,
    "apellido1": String,
    "apellido2": String,
    "direccion": String,
    "telefono": String,
    "correo": String,
    "mascota": [{
            
            "nombre_mas": String,
            "raza": String,
            "estatura": String,
            "peso": Number,
            "jaula":{
                "numerojaula": Number,
                "activa": String,
                "idmascota": Number,
                "hora":Date
            }
        }
    ],
    "cita": [
        {
            
            "numerocita":Number,
            "fecha":Date,
            "hora": String,
            "descripcion": String,
            "servicio": [{
                "nombreserv": String,
                "costo": Number,
                "descuento": Number,
                "total":Number,
            }]
        }],

    "tipocliente": [{
            "registrado": String
        }]
    })

mongoose.model('cliente',ClienteSchema);
