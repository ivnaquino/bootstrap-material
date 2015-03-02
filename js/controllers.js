angular.module( 'Controllers', [] )


.controller( 'MainCtrl' , function ( $scope, $http ) {

	$scope.songs = [];
	$scope.has_searching = false;
	$scope.current_song = {};


	$scope.buscar = function ( val ) {
		$scope.has_searching = true;
		$scope.songs = [];
		$http.get('http://ivndevi.ddns.net/goearapi/search.php', {params: {q:val}})
			.success(function (data) {
				$scope.songs = data.songs;
				console.log(data);
				$scope.has_searching = false;
			})
			.error(function (err) {
				console.log(err);
				$scope.has_searching = false;
			});
	}

	$scope.play = function (song) {
		console.log(song);

		var url = "http://www.goear.com/action/sound/get/";

		$scope.current_song = song;

		var rep = document.getElementById('reproductor');
		rep.setAttribute('src', url + song.id_song);
		rep.play();
	}

	$scope.download = function (song) {
	// var url = "http://www.goear.com/action/sound/get/";
	// window.open( url + id );
	window.open( "http://ivndevi.ddns.net/goearapi/download.php?id="+song.id_song+"&titulo="+song.titulo+"&banda="+song.band );
	}

	$scope.getJsonString = function (obj) {
		return JSON.stringify(obj);
	} 


} )