var mongoose = require('mongoose');

var complaints = new mongoose.Schema({

CName : {type: String, required: true},
PName : {type: String, required: true},
date : {type: String,required: true},
discription : {type: String, required: true}

});

module.exports= mongoose.model('complaints' ,complaints);