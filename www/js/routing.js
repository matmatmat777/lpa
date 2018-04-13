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
    
});