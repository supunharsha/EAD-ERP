app.controller('myCtrl', ['$scope', '$resource', function ($scope, $resource) {

    var Dbcall = $resource('api/editprofile');
    var Dbdell = $resource('api/removenames');

    $scope.firstName = "Rukshani";
    $scope.lastName = "Nilakshika";
    $scope.selected = { value: 0 };


    Dbcall.query(function (results) {
        $scope.name_list = results;
    });

    $scope.addtolist = function () {
        var Db = new Dbcall();
        //Db.name = $scope.newFirstName + " " + $scope.newLastName + " " + $scope.newTitle + " " + $scope.newDepartment + " " + $scope.newEmplStatus + " " + $scope.newnewEmail + " " + $scope.newUsername + " " + $scope.newPassword;
        Db.id = $scope.newID;
        Db.fname = $scope.newFirstName;
        Db.lname = $scope.newLastName;
        Db.title = $scope.newTitle;
        Db.department = $scope.newDepartment;
        Db.employeeStatus = $scope.newEmplStatus;
        Db.email = $scope.newEmail;
        //Db.username = $scope.newUsername;
        //Db.password = $scope.newPassword;

        Db.$save(function (result) {
            $scope.name_list.push(result);
        });
        $scope.newID = "";
        $scope.newFirstName = "";
        $scope.newLastName = "";
        $scope.newTitle = "";
        $scope.newDepartment = "";
        $scope.newEmplStatus = "";
        $scope.newEmail = "";
        //$scope.newUsername = "";
        //$scope.newPassword = "";
    }

    $scope.removeItem = function (index) {
        console.log($scope.name_list[index]);

        var Db = new Dbdell();
        Db.index = index;
        Db.$save(function (result) {
            //console.log(result);
        });
    }
} ]);