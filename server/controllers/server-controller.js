var Model= require('../models/save-names');

module.exports.create=function(req,res){
	console.log(req.body);
	var modelObject=new Model(req.body);
	modelObject.save(function (result){
		// if(err)
		// 	console.log(err)
		// else
			res.json(result)
	});
}

module.exports.list=function(req,res){
	console.log(req.body);
	Model.find({},function(err,results){
		res.json(results);
	});
}

module.exports.remove=function(req,res){
	console.log(req.body);
	console.log("b4");
	
	Model.find({},function(err,results){
		//console.log(results);
		results.splice(req.body['index'],1);			
		// var resu=results;
		// console.log(resu);
		//res.json(resu);
	});	
}