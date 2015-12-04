var mongoose = require('mongoose');

var companyScema	=	new mongoose.Schema({

  name 			: { type: String, required: true, trim: true},
  email			: { type: String, required: true, trim: true, unique: true},
  address		: {	type: String, required: true, trim: true},
  numofemps 	: {	type: Number, required: true, trim: true},  
  branches		: {	type: String, required: true, trim: true},	
  ceo			: {	type: String, required: true, trim: true},
  landline		: {	type: String, required: true, trim: true},
  mobile		: {	type: String, required: true, trim: true}

});

module.exports=mongoose.model( 'company', userScema);