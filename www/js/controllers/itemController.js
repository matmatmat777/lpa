'use strict';

app
    .controller('itemList', function ($scope, $ionicPopup, $http, $firebaseArray, $ionicModal) {

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
        $scope.items = $firebaseArray(rootRef.child('items'));

        ///$scope.currentItem = 1000;
console.log("id",$scope.items.length);   


var max = 0;
        $scope.addItem = function () {
           // console.log("id",maxId);  
           
            var newItem = $scope.newItem = { Uid:"", id: max, title: "", description: "" };
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
                                var id = rootRef.key;
                                console.log("added record with id " + id);
                                $scope.items.$indexFor(id); // returns location in the array
                                console.log("new item add");
                                max = max + 1;
                                console.log("max",max);
                                
                            }

                        }
                    }

                ]

            })


        };

        $scope.delete = function(id){
            rootRef.child('items').child(id).remove();
            console.log("delet",id);
        };

        
        $scope.getdetails = function(id){
          //  console.log("itemid",id);
            $scope.currentItem = id;//$firebaseArray(rootRef.child('items'));
           console.log("itemid",id);//$firebaseArray(rootRef.child('items')));
            
            $scope.modal.show();
         //   console.log("itemid",id);
            
            
          };
          $ionicModal.fromTemplateUrl('js/views/item/one.html', {

            scope: $scope,
            animation: 'slide-in-up'
          }).then(function(modal) {
            $scope.modal = modal;
          });
          $scope.closeModal = function() {
            $scope.modal.hide();
          };

        
    })
;