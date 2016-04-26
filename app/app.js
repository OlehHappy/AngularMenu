
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
    };
  };

  var findMenuItem = function(routeName) {
    var criteriaFunction = function(c) {
      return c.route === routeName || routeName.indexOf(c.route) != -1;
    };
    return menuItems.filter(criteriaFunction)[0];
  };

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    currentMenuItem = findMenuItem(toState.name, toParams);
  });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (currentMenuItem) {
      currentMenuItem.active = true;
      prevMenuItem = findMenuItem(fromState.name);
      if (prevMenuItem && prevMenuItem.name !== currentMenuItem.name) {
        prevMenuItem.active = false;
      };
    } else {
      for (var i = 0; i < currentMenuItem.length; i++) {
        currentMenuItem[i].active = false;
      }
    }
  });

  return {
    nemuItems: menuItems,
    cuttenMenuItem: currentMenuItem
  };
}

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
  }
]);
