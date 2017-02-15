'use strict';

var MyApp = angular.module("MyApp", ['ngRoute']);

MyApp.config(function($routeProvider) {
  $routeProvider
    .when('/alumnos', {
      templateUrl: 'partials/alumnos.html',
      controller: 'AlumnosCtrl'
    })
    .when('/carreras', {
      templateUrl: 'partials/carreras.html',
      controller: 'CarrerasCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});