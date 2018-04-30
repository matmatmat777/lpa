'use strict';

var app = angular.module('starter', ['ionic', 'firebase'])

/* .config(function() {
  var config = {
    apiKey: "AIzaSyDdh8QDCLsykPK98ITpIgHIiDLtBVpsT4E",
    authDomain: "fab-s-5d196.firebaseapp.com",
    databaseURL: "https://fab-s-5d196.firebaseio.com",
    projectId: "fab-s-5d196",
    storageBucket: "fab-s-5d196.appspot.com",
    messagingSenderId: "508242168685"
  };
firebase.initializeApp(config);
  
  }) */

.run(function($ionicPlatform, $location) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $location.path('/item/list');
  });
});
