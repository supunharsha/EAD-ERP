var mongoose = require('mongoose');

module.exports=mongoose.model( 'NameList',{
    id:String,
	fname:String,
    lname:String,
    title:String,
    department:String,
    employeeStatus:String,
    email:String
});