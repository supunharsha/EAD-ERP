var Model= require('../models/new-user');


module.exports.addUsers=function(req,res){
	console.log(req.body);
	 var modelObject=new Model(req.body);

	 modelObject.save(function(err,result){
	 	//console.log(err+' '+result);
		if(err)
			console.log(err)
		else
			res.json(result)
	});
}

module.exports.list=function(req,res){
	console.log(req.body);
	Model.find({},function(err,results){
		res.json(results);
	});
}