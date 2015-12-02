app.controller('authentication',['$scope','$resource', function($scope,$resource) {
	
	var Dbcall=$resource('api/users');
	
    
	

	$scope.authenticate=function(){
		var Db=new Dbcall();
		
		
		if($scope.password==$scope.password2){
			
			console.log("sgfdsrg");

			Db.email=$scope.email;
			Db.password=$scope.password;
			console.log("ssssss");
			Db.$save(
			// 	function(result){
			// console.log(result);			
			// 	$scope.reply="Yeah!!! You can now login";
			// }
			);

			
		}else{
			console.log($scope.password+" "+$scope.password2);
			Dbcall.query(function(results){
				var name_list=results;

				 for(user in name_list){
				 	if(user.email==$sope.email && user.password==$scope.password)
				 		window.location="http://www.tutorialspoint.com";
				 }
				 $scope.reply="Wrong Username and Password";
			});

		}
		
	}
}]);