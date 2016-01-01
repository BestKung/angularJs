var app = angular.module('modeul-directive-element-forth',[]);
var app = angular.module('modeul-directive-element-forth');

app.directive('myWidget',function(){
  return {
  restrict:'E',
  compile : function(element , attributes){
    var content = element.children();
	for(var i = 1 ; i < attributes.repeat ; i++){
	  element.append(content.clone());
	}
  }
  }
});