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
  
            
      "nombre_masc": req.body.nombre_masc,
      "raza": req.body.raza,
      "estatura": req.body.estatura,
      "peso": req.body.peso,
 
   }


    const masc= await ClienteSch.findOneAndUpdate(req.body._id,
    {$push: {mascota: mascota}},
    /*{safe: true, upsert: true},
    function  (err, doc) {
        if(err){
        res.send("fallo al guardar mascota");
        }else{
           masc.save();
          res.status(200).send(masc);
        }
        
    }*/
    { new: true })
    res.send(masc)
  
 })


module.exports = router;
