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


module.exports = router;
