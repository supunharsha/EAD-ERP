var mongoose = require('mongoose');

var products = new mongoose.Schema({

EID : {type: String, required: true,unique:true},
type : {type: String, required: true},
unitPrice : {type: Number,required: true},
cost : {type: Number, required: true}

});

module.exports= mongoose.model('products' ,products);