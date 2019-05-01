app.directive("pengalaman",function(){
	return {
		scope : {
           data  : '=',
           title : '@'
		},
		restrict    : 'E',
        templateUrl : 'konten/directives/Pengalaman.html' 
	}
})