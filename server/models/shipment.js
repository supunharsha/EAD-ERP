var mongoose = require('mongoose');

var shipment = new mongoose.Schema({

product : {type: String, required: true},
SName : {type: String, required: true},
SAddress : {type: String, required: true},
QTY : {type: Number, required: true},
unitPrice : {type: Number, required: true},
SDate : {type: String, required: true},
DueDate : {type: String, required: true}
});

module.exports= mongoose.model('shipment' ,shipment);