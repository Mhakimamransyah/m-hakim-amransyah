var app = angular.module('resume',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        // For any unmatched url, send to /business
        $urlRouterProvider.otherwise("/cv")
         
        $stateProvider.state('cv', {
                    url        : "/cv",
                    templateUrl: "konten/cv.html",
                    controller : "cvController"
        }).state('portofolio', {
                    url: "/portofolio",
                    templateUrl: "konten/portofolio.html",
                    controller: "portofolio"
        }).state('pfol', {
                    url: "/pfol",
                    templateUrl: "konten/portofolio.html",
                    controller: "portofolio"
        }).state('notification', {
                    url: "/notification",
                    templateUrl: "konten/notification.html",
                    controller : "notification"
        })
    }]);

app.run(function($rootScope,browserService,$state,$timeout){
	 $rootScope.tittle          = "M.Hakim Amransyah";
     $rootScope.mobile_browser  = browserService.isMobileBrowser();
     if(browserService.isMobileBrowser()){
        $timeout(function(){
           $state.go('notification')
        },5);
     }
})
