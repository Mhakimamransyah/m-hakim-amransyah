app.directive("organisasi",function(){
	return {
		scope : {
           data  : '=',
           title : '@'
		},
		restrict    : 'E',
        templateUrl : 'konten/directives/Organisasi.html' 
	}
})