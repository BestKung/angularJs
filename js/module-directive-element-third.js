var app = angular.module('module-directive-element-third',[]);
var app = angular.module('module-directive-element-third');

app.directive('myWidget',function(){
  return {
    restrict:'E',
	transclude:true,
    template:'<h1>Hello People</h1><div ng-transclude></div>'
  }
});