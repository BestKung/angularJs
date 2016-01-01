var app = angular.module('module-service-input',[]);
var app = angular.module('module-service-input').controller('serviceInputCotroller',
function(userService,$scope){
$scope.user={};
$scope.sendData = function(){
    userService.userData = $scope.user;
	alert('please click show data.');
};
});

app.controller('serviceOutputController',function($scope,userService){
$scope.showData = function(){
	$scope.userService = userService.userData;
};
});

app.factory('userService',function(){
	return {
	   userData:{}
	}
});
