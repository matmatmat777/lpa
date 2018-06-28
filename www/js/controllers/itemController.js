'use strict';

app
    .controller('itemList', ['$scope', '$ionicPopup', '$http', '$firebaseArray', '$ionicModal', '$cordovaCamera', 'Auth', function ($scope, $ionicPopup, $http, $firebaseArray, $ionicModal, $cordovaCamera, Auth) {

        var rootRef = firebase.database().ref();
        $scope.items = $firebaseArray(rootRef.child('items'));
        var syncArray = $firebaseArray(rootRef.child('items'));
        //$scope.images = [];
        var max = 0;

        $scope.addItem = function () {

            var newItem = $scope.newItem = { id: max, brand: "", model: "", price:"", description: "", image: "" };
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
                                $scope.takePicture();
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

          $scope.takePicture = function() {
            var options = {
              quality: 75, // Qualité de l'image sauvée, valeur entre 0 et 100
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              allowEdit: true,
              encodingType: Camera.EncodingType.JPEG, // Format d'encodage : JPEG ou PNG
              targetWidth: 300, // Largeur de l'image en pixel
              targetHeight: 300, // Hauteur de l'image en pixel
              saveToPhotoAlbum: false // Enregistrer l'image dans l'album photo du device
            };
        
            $cordovaCamera.getPicture(options).then(function(imageData) {
                syncArray.$add({image: imageData}).then(function() {
                    alert("Image has been uploaded");
                });
            }, function(error) {
                console.error(error);
            });
          };    
    }]);