const mongoose = require('mongoose');

var book=mongoose.Schema({
    name:String,
    price:Number,
})

module.exports = mongoose.model('Book',book);