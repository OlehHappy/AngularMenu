
var myApp = angular.module('myApp', [
  'myApp.services',
  'myApp.controllers',
  'ngSanitize',
  'ui.bootstrap',
  'ui.router',
  'ui'
]);

var menuService = function($rootScope) {
  var menuItems = [
    {name: 'state1', heading: 'State1', route: 'app.state1', active: false},
    {name: 'state2', heading: 'State2', route: 'app.state2', active: false},
    {name: 'state3', heading: 'State3', route: 'app.state3', active: false}
  ];
  var currentMenuItem;
  var resetMenuItem = function(menuItem) {
    menuItem.active = false;
  };
  var resetMenuItems = function() {
    for (var i = 0; i < menuItems.length; i++) {
      resetMenuItem(menuItems[i]);
    }
  }
};

myApp.config(['$modalProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider',
  function($modalProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
    $modalProvider.options = {dialogFade: true, backdrop: 'static', keyboard: false};
    $locationProvider.html5mode(false);

    $urlRouterProvider
        .when('/', '/state1')
        .otherwise('/state1');

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/',
            views: {
              'main': {template: '<div ui-view></div>'}
            }
        })
        .state('app.state1', {
          url: 'state1',
          templateUrl: 'state1.html',
          controller: function() { },
          reloadOnSearch: false
        })
        .state('app.state1', {
          url: 'state1',
          templateUrl: 'state1.html',
          controller: function() { },
          reloadOnSearch: false
        })
        .state('app.state1', {
          url: 'state1',
          templateUrl: 'state1.html',
          controller: function() { },
          reloadOnSearch: false
        });
  };
]);
