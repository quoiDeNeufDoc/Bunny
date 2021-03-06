'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-timeline'

  ])
  .config(

    function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/users.html'
      })
      .when('/myUser', {
        templateUrl: 'views/myUser.html'
      })
      .when('/userDetails', {
        templateUrl: 'views/userDetails.html'
      })
      .when('/users', {
        templateUrl: 'views/users.html'
      })
      .when('/timeline', {
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl',
        controllerAs: 'timeline'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
