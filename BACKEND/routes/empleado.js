var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const empleadoSchema = mongoose.model('empleados');

const { check, ValidacionesResult, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

/* GET users listing. 
router.get('/', async(req, res, next)=> {
 const usuarios= await Usuarios.find()
 if(usuarios){

  res.send(usuarios)
 }
 res.send("no hay usuarios que mostrar")
});
*/
router.get('/', async (req, res, next) => {
  const emple = await empleadoSchema.find(function (err, emple) {

    if (err) { next(err) }
    res.json(emple)
  })

});
// POST
router.post('/', async (req, res) => {
  let emple = await empleadoSchema.findOne({ nombre: req.body.nombre })

  if (emple) {
    return res.send("Empleado ya existe")
  }

  emple = new empleadoSchema({

    "_id":req.body._id,
    "nombre": req.body.nombre,
    "apellido1": req.body.apellido1,
    "apellido2": req.body.apellido2,
    "direccion": req.body.direccion,
    "telefono": req.body.telefono,
    "correo": req.body.correo,
    "contrasena": req.body.contrasena,
    "horario": [{
      "horaini": req.body.horaini,
      "horafin": req.body.horafin,
      "dias": req.body.dias
    }],

  })
  await emple.save()
  res.status(201).send(emple)
})

module.exports = router;
