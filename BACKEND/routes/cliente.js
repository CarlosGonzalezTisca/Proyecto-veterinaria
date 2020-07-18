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
 
 // RUTAS PARA MASCOTA.
 router.put('/mascota', async (req, res)=>{

   var mascota ={
            "_id": req.body._id,
      "nombre_masc": req.body.nombre_masc,
      "raza": req.body.raza,
      "estatura": req.body,
      "peso": req.body.peso,
      "jaula":{
          "numerojaula": req.body.numerojaula,
          "activa": req.body.activa,
          "idmascota": req.body.idmascota,
          "hora":req.body.hora
      }
  }

   


   const masc = await ClienteSch.findOneAndUpdate({ _id: req.body._id }, 
      { $push: { mascota : mascota  } },
    /* function (error, success) {
           if (error) {
               console.log(error);
           } else {
               console.log(success);
               
           } }*/
      {new :true})
       res.send(masc) })


module.exports = router;
