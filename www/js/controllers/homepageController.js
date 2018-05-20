'use strict';

app.factory("Auth", ["$firebaseAuth",
    function ($firebaseAuth) {
        return $firebaseAuth();
    }
]);

//app.controller('homepageIndex', function ($scope) {

    app.controller('homepageIndex', ['$scope', 'Auth','$window', function($scope, Auth, $window) {
        var user = $scope.user = { email: "", password: "" };
      $scope.signIn = function() {
       // $scope.firebaseUser = null;
        $scope.error = null;
        Auth.$signInWithEmailAndPassword(user.email, user.password).then(function(firebaseUser) {
            $scope.firebaseUser = firebaseUser;
            $window.location.href = '/#/item/list';
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            // ...
          });
       /*  auth.$signInAnonymously().then(function(firebaseUser) {
          $scope.firebaseUser = firebaseUser;
        }).catch(function(error) {
          $scope.error = error;
        }); */
      };
    }
  ]);
//});

app.controller('homepageSignUp', ['$scope', 'Auth', function ($scope, Auth) {
    var newUser = $scope.newUser = { email: "", password: "" };

    $scope.registerUser = function () {
        Auth.$createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(function (firebaseUser) {
                console.log("yas", firebaseUser);
            }).catch(function (error) {
                console.log("error");
            });
    };
}

]);