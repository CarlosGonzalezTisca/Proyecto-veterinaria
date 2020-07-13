var express = require('express');
var router = express.Router();

const mongoose=require('mongoose');
const Usuario= mongoose.model('usuario');
const{check,ValidacionesResult, validationResult}=require('express-validator');
const bcrypt = require ('bcrypt') ;  


router.get('/', async(req, res, next)=> {
 const usuario= await Usuario.find(function(err,usuario){

  if(err){next(err)}
  res.json(usuario)
 })

}); 

router.post('/', [
  check ('idusuario').isLength({min:1}),
  check('correo').isLength({min:1}),
  check('contrasena').isLength({min:1}),
  check('tipo').isLength({min:1}),
],async(req, res)=> {
  
const errors= validationResult(req);
if(!errors.isEmpty()){
  return res.status(422).json({errors: errors.array()});
}
let usuario = await Usuario.findOne({correo: req.body.correo})
if(usuario){
  return res.status(400).send('Usuario ya exite')
}
const salt= await bcrypt.genSalt(10)
const passcifrado= await bcrypt.hash(req.body.contrasena,salt)
//usuario= new Usuarios(req.body);
usuario= new Usuario({
  idusuario:req.body.idusuario,
  tipo:req.body.tipo,
  correo:req.body.correo,
  contrasena:passcifrado,
  
});
await usuario.save()
res.status(200).send(usuario)

 }); 


router.post('/login',[
check('correo').isLength({min:1}),
check('contrasena').isLength({min:1})
],async(req,res)=>{


const errors= validationResult(req);
if(!errors.isEmpty()){
  return res.status(422).json({errors: errors.array()});
}

let usuario=await Usuario.findOne({email: req.body.correo})
if(!usuario){
return res.status(400).send('Usuarios o Contraseña incorrectos')

}

const validaPassword=await bcrypt.compare(req.body.contrasena,usuario.contrasena)
if(!validaPassword){
  return res.status(400).send('Usuarios o Contraseña incorrectos')
}

res.send('Bienvenido al sistema')
})
module.exports = router;
