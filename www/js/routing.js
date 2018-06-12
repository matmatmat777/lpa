'use strict';

var cacheActive = false;

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('homepage', {
            cache: cacheActive,
            url: '/homepage',
            templateUrl: 'js/views/homepage/index.html',
            controller: 'homepageIndex'
    
        })
        .state('login', {
            cache: cacheActive,
            url: '/signUp',
            templateUrl: 'js/views/homepage/signUp.html',
            controller: 'homepageSignUp'
        })
        .state('itemList', {
            cache: cacheActive,
            url: '/item/list',
            templateUrl: 'js/views/item/list.html',
            controller: 'itemList'
        })
        $urlRouterProvider.otherwise('/homepage')
});