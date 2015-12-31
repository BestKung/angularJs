var app = angular.module('begin-directive',[]);
var app = angular.module('begin-directive').controller('beginDirectiveController',function(){

});

app.directive('show',function(){
return{
link : function(scope , element , attributes){
scope.$watch(attributes.show , function(values){
element.css('display', values ? '' : 'none');
});
}
}
});