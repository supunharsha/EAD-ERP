var productModel = require('../../models/products');
var inventryModel= require('../../models/Inventry');


module.exports.add=function(req,res){
	//console.log(req.body);
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
	var inventryModelObject=new inventryModel(req.body);
	inventryModelObject.save(function (result){
		res.json(result)
	});
}


module.exports.getInventry=function(req,res){
	inventryModel.find({},function(err,results){
		if(err)
			console.log(err);
		else 
			res.json(results);
	});
}

module.exports.removeProduct=function(req,res){
	productModel.find({},function(err,results){
		var result=results[req.body['index']];
		productModel.find({ _id: result._id }).remove(function(err,resu){
			if(err)
				console.log(err)
			else
				res.json(resu);

		});

	});
}

//module.exports.updateProduct=function(req,res){
	//console.log(req.body);
	//productModel.find({},function(err,results){
	//	var result=results[req.body['index']];
	//	console.log(result);
	//	productModel.findOne({ _id: result._id },function(err,object){
	//		if(err)
	//			console.log(err);
	//		else{
	//			object.EID=req.body['name'];
	//			object.type=req.body['type'];
	//			object.unitPrice=req.body['unitPrice'];
	//			object.cost=req.body['cost'];
    //
    //
	//			object.save(function(err,result){
	//				if(err)
	//					console.log(err);
	//				else
	//					res.json(result);
    //
	//			});
	//		}
    //
	//	});
	//});

//}


module.exports.updateProduct=function(req,res){
	console.log(req.body);


	productModel.find({},function(err,results){
		var result=results[req.body['index']];

		productModel.findOne({ _id: result._id },function(err,object){
			if(err)
				console.log(err);
			else{

				object.EID=req.body['EID'];
				object.type=req.body['type'];
				object.unitPrice=req.body['unitPrice'];
				object.cost=req.body['cost'];
				object.save(function(err,result){
					if(err)
						console.log(err);
					else
						res.json(result);

				});
			}

		});
	});

}
