var mongoose = require('mongoose');

var userScema	=	new mongoose.Schema({

  username 		: { type: String, required: true, trim: true},
  email			: { type: String, required: true, trim: true, unique: true},
  password 		: {	type: String, required: true, trim: true},  
  access		: {	type: String, required: true, trim: true}	

});

module.exports=mongoose.model( 'users', userScema);