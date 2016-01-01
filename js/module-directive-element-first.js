var app = angular.module('module-directive-element-first',[]);
var app = angular.module('module-directive-element-first');

app.directive('myWidget',function(){
var linkFunction = function(scope , element , attributes){
  var paragraph = element.children()[0];
  paragraph.onclick = function(){
    paragraph.style.backgroundColor = 'red';
    paragraph.style.color = 'white';
  };
}
return {
    restrict:'E',
	link:linkFunction
}
});

app.controller('elementFirstController',function($scope){
alert('click on paragraph (text \'Hello\')');
});

