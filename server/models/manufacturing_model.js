var mongoose = require('mongoose');

var manufacturing = new mongoose.Schema({

day : {type: Number, required: true},
month : {type: Number, required: true},
year : {type: Number, required: true},
eType : {type: String, required: true},
QTY : {type: Number, required: true}
});

module.exports= mongoose.model('manufacturing' ,manufacturing);