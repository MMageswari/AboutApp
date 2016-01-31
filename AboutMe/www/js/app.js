// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.projects', {
        url: '/projects',
        views: {
            'menuContent': {
                templateUrl: 'templates/projects.html',
                    controller: 'MotionCtrl'
            }
        }
    })

    .state('app.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'templates/contact.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.honours', {
        url: '/honours',
        views: {
            'menuContent': {
                templateUrl: 'templates/honours.html',
                controller: 'MotionCtrl'
            }
        }
    })
    
    .state('app.aboutme', {
        url: '/aboutme',
        views: {
            'menuContent': {
                templateUrl: 'templates/aboutme.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.timeline', {
        url: '/timeline',
        views: {
            'menuContent': {
                templateUrl: 'templates/timeline.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/aboutme');
});
