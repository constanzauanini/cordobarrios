'use strict';

/**
 * @ngdoc overview
 * @name cordoBarrios5App
 * @description
 * # cordoBarrios5App
 *
 * Main module of the application.
 */
angular
  .module('cordoBarrios5App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/barrios', {
        templateUrl: 'views/barrios.html',
        controller: 'BarriosCtrl',
        controllerAs: 'barrios'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/barrios/nuevaCordoba', {
        templateUrl: 'views/nuevaCordoba.html',
        controller: 'NuevaCordobaCtrl',
        controllerAs: 'nuevaCordoba'
      })
       .when('/barrios/barrioJardin', {
        templateUrl: 'views/barrioJardin.html',
        controller: 'BarrioJardinCtrl',
        controllerAs: 'barrioJardin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
