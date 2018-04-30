'use strict';

app
    .controller('itemList', function ($scope, $ionicPopup, $http, $firebaseArray) {

        var config = {
            apiKey: "AIzaSyDdh8QDCLsykPK98ITpIgHIiDLtBVpsT4E",
            authDomain: "fab-s-5d196.firebaseapp.com",
            databaseURL: "https://fab-s-5d196.firebaseio.com",
            projectId: "fab-s-5d196",
            storageBucket: "fab-s-5d196.appspot.com",
            messagingSenderId: "508242168685"
        };
        firebase.initializeApp(config);

        var rootRef = firebase.database().ref();
        $scope.items = $firebaseArray(rootRef);

        $scope.addItem = function () {
            var newItem = $scope.newItem = { Uid: "", id: $scope.items.length, title: "", description: "" };
            var itemTemplate = '<input type="text" placeholder="titre" ng-model="newItem.title"><br/><input type="text" placeholder="username" ng-model="newItem.user.username"><br/><textarea ng-model="newItem.description" placeholder="description"></textarea>';


            var myPopup = $ionicPopup.show({
                template: itemTemplate,
                title: 'ajouter une annonce',
                scope: $scope,
                buttons: [
                    { text: 'annuler' },
                    {
                        text: '<b>ajouter</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!$scope.newItem.title) {
                                e.preventDefault();

                            } else {
                                $scope.items.$add(newItem);
                            }

                        }
                    }

                ]

            })


        };

        $scope.delete = function(id){
            rootRef.child(id).remove();
        }

    });