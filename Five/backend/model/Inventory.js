const mongoose=require('mongoose');

const inventory=mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number,
    total:Number
})

module.exports=mongoose.model('Inventory',inventory);