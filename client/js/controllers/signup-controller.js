app.controller('signupCtrl',['$scope','$resource', function($scope,$resource) {
	
	var Dbcall=$resource('api/newusers'); 

	$scope.accessLevels=['Administrator','Priviledged User','Regular User','Guest'];

	 $scope.accesslevelselected = function (input) {
        $scope.access=input;
       // console.log(input);
    }

	$scope.createUser=function(){

		//console.log($scope.name+' '+$scope.email+' '+$scope.password+' '+$scope.access);
		var Db 		=new Dbcall();

		Db.username	=$scope.name;
		Db.email	=$scope.email;
		Db.password	=$scope.password;
		Db.access	=$scope.access;

		Db.$save();

		
	}

}]);