var app = angular.module('module-directive-element-second',[]);
var app = angular.module('module-directive-element-second');

app.directive('myWidget',function(){
  return {
    restrict : 'E',
	template : '<h1>My Widget</h1>'
  }
});
