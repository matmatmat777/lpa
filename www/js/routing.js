'use strict';

var cacheActive = false;

app.config(function($stateProvider){
    $stateProvider
        .state('homapage', {
            cache: cacheActive,
            url: '/',
            templateUrl: 'js/views/homepage/index.html',
            controller: 'homepageIndex'
    
        })
        .state('login', {
            cache: cacheActive,
            url: '/login',
            templateUrl: 'js/views/homepage/login.html',
            controller: 'homepageLogin'
        })
        .state('itemList', {
            cache: cacheActive,
            url: '/item/list',
            templateUrl: 'js/views/item/list.html',
            controller: 'itemList'
        })
        .state('itemOne', {
            cache: cacheActive,
            url: '/item/:id',
            templateUrl: 'js/views/item/one.html',
            controller: 'itemOne'
        })
});