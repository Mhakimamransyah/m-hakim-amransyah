app.controller('notification',["$scope",'browserService',"$state",function($scope,browserService,$state){
	 if(!browserService.isMobileBrowser()){
        $state.go('cv');
	 }
}])