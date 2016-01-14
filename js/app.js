
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.677455, lng: -5.4451702},
    zoom: 16
  });
}

var app = angular.module('chorizApp',[]);

app.controller('events-controller',['$http', '$scope', function($http, $scope) {
    $scope.active="home";
    $scope.toggleNav = function (name){
        $scope.active = name;
        console.log(name);
  };

	$http({
        method: 'GET',
        url: 'https://intense-inferno-3375.firebaseio.com/agrupaciones.json'
        }).then(function successCallback(data) {
        	$scope.agrupaciones = data.data;
        }, function errorCallback(data) {
    });
  $http({
        method: 'GET',
        url: 'https://intense-inferno-3375.firebaseio.com/eventos.json'
        }).then(function successCallback(data) {
          $scope.eventos = data.data;
        }, function errorCallback(data) {
    });
  $http({
        method: 'GET',
        url: 'https://intense-inferno-3375.firebaseio.com/fechas.json'
        }).then(function successCallback(data) {
          $scope.fechas = data.data;
        }, function errorCallback(data) {
    });
}]);

app.directive('fechas', function(){
	return {
        restrict: 'E',
        templateUrl: 'templates/fecha.html'
	};
});

app.directive('agrupaciones', function(){
	return {
        restrict: 'E',
        templateUrl: 'templates/agrupaciones.html'
	};
});

app.directive('eventos', function(){
	return {
        restrict: 'E',
        templateUrl: 'templates/eventos.html'
	};
});