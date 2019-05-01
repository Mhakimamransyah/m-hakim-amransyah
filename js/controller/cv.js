app.controller('cvController',['$scope','$rootScope','browserService','$state',function($scope,$rootScope,browserService,$state){
	$rootScope.content = "CV";
	  var id = ["data-pribadi","pendidikan","kemampuan","organisasi","pengalaman"];
  
    if(browserService.isMobileBrowser()){
          $state.go('notification');
    }

    hideAllDetail();

    $scope.lihatDetail = function(detail){
        for(i in id){
           if(id[i] != detail){
           	  $("#"+id[i]).hide();
           }else{
           	  $("#"+detail).show();
           }
        }
    }

    function hideAllDetail(){
       for(var i=1;i<id.length;i++){
           	$("#"+id[i]).hide();
        }	
    }
}])