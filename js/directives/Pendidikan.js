app.directive("pendidikan",function(){
	return {
		scope : {
           data  : '=',
           title : '@'
		},
		restrict    : 'E',
        templateUrl : 'konten/directives/Pendidikan.html' 
	}
})