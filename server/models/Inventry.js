var mongoose = require('mongoose');

var inventry = new mongoose.Schema({

MID : {type: String, required: true , unique: true},
Typee : {type: String, required: true},
qty : {type: Number, required: true},
eoq : {type: Number, required: true}

});

module.exports= mongoose.model('inventry' ,inventry);