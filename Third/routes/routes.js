const express=require('express');

const Router=express.Router();
const{getbook,addbook,deletebook} = require('../controller/controller')

Router.get('/',getbook);
Router.post('/',addbook);
Router.delete('/:id',deletebook)
module.exports=Router;