app.directive("datapribadi",function(){
	return {
		scope : {
           data  : '=',
           title : '@'
		},
		restrict    : 'E',
        templateUrl : 'konten/directives/Datapribadi.html' 
	}
})