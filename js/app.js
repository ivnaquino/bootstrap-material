angular.module( 'MusicApp' , ['ngRoute', 'Services', 'Controllers'] )


.config( function ($routeProvider) {

	$routeProvider

		.when( '/', {
			templateUrl: "views/inicio.html",
			controller: 'MainCtrl'
		} )

})


