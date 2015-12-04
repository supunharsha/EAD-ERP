var productModel = require('../../models/products');
var inventryModel= require('../../models/Inventry');


module.exports.add=function(req,res){
	console.log(req.body);
	var productModelObject=new productModel(req.body);
	productModelObject.save(function (result){
		res.json(result)
	});
}

module.exports.get=function(req,res){
	
	productModel.find({},function(err,results){
		//console.log(err+' '+results);
		if(err)
			console.log(err);
		else 
			res.json(results);
	});
}

module.exports.addInventry=function(req,res){
	console.log(req.body);
	var inventryModelObject=new inventryModel(req.body);
	inventryModelObject.save(function (result){
		res.json(result)
	});
}


module.exports.getInventry=function(req,res){
	console.log(req.body);

	inventryModel.find({},function(err,results){
		console.log(err+' '+results);
		if(err)
			console.log(err);
		else 
			res.json(results);
	});
}