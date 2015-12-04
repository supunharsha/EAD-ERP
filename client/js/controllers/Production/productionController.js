var app = angular.module('myApp',['ngResource']);
app.controller('productionCtrl',['$scope','$resource',function($scope,$resource){

	var DBCall=$resource('/production/addget');

	var DBInventry=$resource('/inventry/add');


	DBCall.query(function(res){
		$scope.productList=res;
	});

	DBInventry.query(function(res){
		$scope.inventryList=res;
	});


	
	//$scope.productList=[{EID:12 , type:56,unitPrice:4,cost:89}];


	$scope.addtoproduct=function(){

		//console.log("dsadaw");

		var connection=new DBCall();
		connection.EID=$scope.EID;
		connection.type=$scope.type;
		connection.unitPrice=$scope.unitPrice;
		connection.cost=$scope.cost;

		console.log(connection);

		connection.$save(function(res){
			$scope.productList.push(res);		
		});
		$scope.EID="";
		$scope.type="";
		$scope.unitPrice="";
		$scope.cost="";	
		

	}


	$scope.addtoinventry=function(){

		var connection1= new DBInventry();
		connection1.MID=$scope.MID;
		connection1.Typee=$scope.Typee;
		connection1.qty=$scope.qty;
		connection1.eoq=$scope.eoq;

		console.log(connection1);


		connection1.$save(function(res){
			$scope.inventryList.push(res);



		});

		$scope.MID="";
		$scope.Typee="";
		$scope.qty="";
		$scope.eoq="";

	}

}]);