'use strict';

app
    .controller('itemList', function ($scope, $ionicPopup, $http, $firebaseArray, $ionicModal) {

        var rootRef = firebase.database().ref();
        $scope.items = $firebaseArray(rootRef.child('items'));

        console.log("id",$scope.items.length);   


        var max = 0;
        $scope.addItem = function () {
           //console.log("id",maxId);  
           
            /* var newItem = $scope.newItem = { Uid:"", id: max, title: "", description: "" };
            var itemTemplate = '<input type="text" placeholder="titre" ng-model="newItem.title"><br/><input type="text" placeholder="username" ng-model="newItem.user.username"><br/><textarea ng-model="newItem.description" placeholder="description"></textarea>';
 */

var newItem = $scope.newItem = { id: max, brand: "", model: "", price:"", description: "" };
var itemTemplate = '<input type="text" placeholder="marque" ng-model="newItem.brand"><input type="text" placeholder="modele" ng-model="newItem.model"><input type="text" placeholder="prix" ng-model="newItem.price"><input type="text" placeholder="prix" ng-model="newItem.kilometers"><br/><input type="text" placeholder="username" ng-model="newItem.user.username"><input type="text" placeholder="télephone" ng-model="newItem.user.phone"><br/><textarea ng-model="newItem.description" placeholder="description"></textarea>';

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
                            if (!$scope.newItem.brand) {
                                e.preventDefault();

                            } else {
                                $scope.items.$add(newItem);
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
            $scope.currentItem = id;
           console.log("itemid",id);
            
            $scope.modal.show();
         
            
            
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