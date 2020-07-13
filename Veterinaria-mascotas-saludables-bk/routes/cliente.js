var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const ClienteSch= mongoose.model('cliente');



router.get('/', async(req, res, next)=> {
  await ClienteSch.find((err,cli)=>{
 
 if(err){return next(err)}
 res.json(cli);
 
  })
 });

 router.post('/',async(req,res)=>{
  let Cliente = await ClienteSch.findOne({Nombre:req.body.Nombre})
  if(Cliente){
    return res.send("Curso ya existente")
  }
  Curso=new ClienteSch({
    
    _id : req.body._id,
    nombre: req.body.nombre,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    correo: req.body.correo,
    mascota: [{
            
            nombre_mas: req.body.nombre_mas,
            raza: req.body.raza,
            tamaño: req.body.tamaño,
            peso: req.body.peso,
            jaula:{
                numerojaula: req.body.numerojaula,
                activa: req.body.activa,
                idmascota: req.body.activa,
                hora:req.body.hora.activa
            }
        }
    ],
    cita: [
        {
            
            numerocita:req.body.numerocita,
            fecha:req.body.fecha,
            hora: req.body.hora,
            descripcion: req.body.descripcion,
            servicio: [{
                nombreserv: req.body.nombreserv,
                costo: req.body.costo,
                descuento: req.body.descuento,
                total: req.body.total,
            }]
        }],

    tipocliente: [{
            registrado: req.body.registrado
        }]
  })
  
  await ClienteSch.save()
  
  res.status(201).send(ClienteSch);
  
  })


module.exports = router;
