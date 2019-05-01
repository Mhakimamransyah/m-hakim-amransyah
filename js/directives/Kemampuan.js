app.directive("kemampuan",function(){
	return {
		scope : {
           data  : '=',
           title : '@'
		},
		restrict    : 'E',
        templateUrl : 'konten/directives/Kemampuan.html' 
	}
})