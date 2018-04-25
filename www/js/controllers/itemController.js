'use strict';

app
    .controller('itemList',function($scope, $ionicPopup){
        $scope.items = [
            {
                image: "/image/maxresdefault.jpg",
                id: 0,
                title: "la premiere annonce",
                user:{
                    username: "jacky la trompe",
                },
                description: "bibibi bababa obo nnnf fff fff ffff",
            },
            {
                id: 1,
                title: "la 2eme annonce",
                user:{
                    username: "Riri la burne"
                },
                description: "bibibi bababa obo nnnf fff fff ffff",
            }
        ];

        $scope.addAnnounce = function(){
            $scope.newItem = {id: $scope.items.length, title:"", description:""};

            var itemTemplate= '<input type="text" ng-model="newItem.title"><br/><input type="text" ng-model="newItem.user.username"><br/><textarea ng-model="newItem.description"></textarea>';

            var myPopup = $ionicPopup.show({
                template:itemTemplate,
                title:'ajouter une annonce',
                scope: $scope,
                buttons: [
                    { text: 'annuler' },
                    {
                        text: '<b>ajouter</b>',
                        type: 'button-positive',
                        onTap: function(e){
                            if (!$scope.newItem.title){
                                e.preventDefault();

                            }else {
                                $scope.items.push($scope.newItem);

                            }
                        }
                    }
                ]

            })

        };

        $scope.delete = function(id){
            console.log("id to del",id);
            for(var i = 0; i < $scope.items.length; i++){
                if ($scope.items[i].id === id){
                    $scope.items.splice(i,1);
                    return;
                }
            }

        };

    })    .controller('itemOne',function($scope, $stateParams){
        console.log($stateParams);
        $scope.items ={
            image: "/image/maxresdefault.jpg",
            id: 0,
            title: "la premiere annonce",
            user:{
                username: "jacky la trompe"
            },
            description: "bibibi bababa obo nnnf fff fff ffff",
        }
    })
    
    ;