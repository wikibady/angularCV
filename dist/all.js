
define(function(require, exports, module) {
	
	require("../seajs/angular.js");
	require("../seajs/angular-route.js");
	var myCV=angular.module("myCV",['ngRoute'])//注入路由模块
	myCV.config(["$routeProvider",function($routeProvider){
		$routeProvider
		.when('/',{
			controller:'LinkCtrl',
			templateUrl:"1.html"
		})
		.when('/2',{
			controller:'LinkCtrl',
			templateUrl:"2.html"
		})
		.otherwise({redirectTo:'/'});
	}]);
  module.exports=myCV;
})



define(function(require, exports, module) {

	myCV=require("./app.js");
	
	myCV.controller('LinkCtrl',function($scope){
		$scope.links=["","1","2"]//设置路由
	})
	myCV.controller('LinkCtrl3',function($scope){
		$scope.links=["222","111","2"]//设置路由
	})

})


define(function(require, exports, module) {
	
	require("./app.js");
	require("./controller.js");
	//require("./app.js");	
})