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
      };

/*       $scope.signOut = function() {
        // Sign out
        firebase.auth().signOut();
      }; */

      $scope.deleteUser = function() {
        console.log("click del");
        $scope.message = null;
        $scope.error = null;
  
        // Delete the currently signed-in user
        Auth.$deleteUser().then(function() {
          $scope.message = "User deleted";
        }).catch(function(error) {
          $scope.error = error;
        });
      };

    }
  ]);
//});

app.controller('homepageSignUp', ['$scope', 'Auth','$window', function ($scope, Auth, $window) {
    var newUser = $scope.newUser = { email: "", password: "" };

    $scope.registerUser = function () {
        Auth.$createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(function (firebaseUser) {
                console.log("yas", firebaseUser);
                $window.location.href = '/#/item/list';
            }).catch(function (error) {
                console.log("error");
            });
    };

   
}

]);