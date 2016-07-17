


define(function(require, exports, module) {

	myCV=require("./app.js");
	
	myCV.controller('LinkCtrl',function($scope){
		$scope.links=["","1","2"]//设置路由
	})
	myCV.controller('LinkCtrl3',function($scope){
		$scope.links=["222","111","4"]//设置路由
	})

})