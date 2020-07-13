var express = require('express');
var router = express.Router();

const mongoose=require('mongoose');
const ClienteSch= mongoose.model('empleado');
const{check,ValidacionesResult, validationResult}=require('express-validator');
const bcrypt = require ('bcrypt') ;  

/* GET users listing. 
router.get('/', async(req, res, next)=> {
 const usuarios= await Usuarios.find()
 if(usuarios){

  res.send(usuarios)
 }
 res.send("no hay usuarios que mostrar")
});
*/
router.get('/', async(req, res, next)=> {
 const usuario= await ClienteSch.find(function(err,usuario){

  if(err){next(err)}
  res.json(usuario)
 })

}); 

router.post('/', [
  check ('codigo').isLength({min:1}),
  check('nombre').isLength({min:3}),
  check('email').isLength({min:3}),
  check('password').isLength({min:3}),
],async(req, res)=> {
  
const errors= validationResult(req);
if(!errors.isEmpty()){
  return res.status(422).json({errors: errors.array()});
}
let usuario = await ClienteSch.findOne({email: req.body.email})
if(usuario){
  return res.status(400).send('Usuario ya exite')
}
const salt= await bcrypt.genSalt(10)
const passcifrado= await bcrypt.hash(req.body.password,salt)
//usuario= new ClienteSch(req.body);
usuario= new ClienteSch({
  codigo:req.body.codigo,
  nombre:req.body.nombre,
  email:req.body.email,
  password:passcifrado,
  
});
await usuario.save()
res.status(200).send(usuario)

 }); 


router.post('/login',[
check('email').isLength({min:1}),
check('password').isLength({min:1})
],async(req,res)=>{


const errors= validationResult(req);
if(!errors.isEmpty()){
  return res.status(422).json({errors: errors.array()});
}

let usuario=await ClienteSch.findOne({email: req.body.email})
if(!usuario){
return res.status(400).send('Usuarios o Contraseña incorrectos')

}

const validaPassword=await bcrypt.compare(req.body.password,usuario.password)
if(!validaPassword){
  return res.status(400).send('Usuarios o Contraseña incorrectos')
}

res.send('Bienvenido al sistema')
})
module.exports = router;
